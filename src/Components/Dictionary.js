import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


let history = [];
if(localStorage.getItem('history') !== null){
    history = JSON.parse(localStorage.getItem('history'));
}
const Dictionary = () => {

    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");
    const [data, setData] = useState([]);
    const [animation,setAnimation] = useState("");

    const searchDictionary = (e) => {
        setAnimation("main-div");
        e.preventDefault();
        axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`)
            .then((response) => {
                console.log("Search Data -> ", response.data[0]);
                setAnimation("normal")
                // console.log("Definitions Data -> ", response.data[0].meanings[0].definitions);
                let obj = {
                    word: response.data[0].word,
                    link : `https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`
                }
                history.unshift(obj);
                localStorage.setItem("history", JSON.stringify(history));
                setData(response.data[0]);
            })
            .catch((error) => {
                alert(error.response.data.title);
                setTimeout(()=>{
                    setAnimation("normal")
                },1500)
                console.log("Error -> ", error);
            })
    }

    // console.log(data)

    const navigatorToHistory = (e)=>{
        e.preventDefault();
        navigate('/history');
    }
    const navigateToHome = (e)=>{
        e.preventDefault();
        navigate('/');
    }

    return (
        <div>
            <main id='main'  className={animation}>
                <div className='search-bar'>
                    <form onSubmit={(e) => searchDictionary(e)}>
                        <input id='search-bar' type='text' placeholder='Search...' onChange={(e) => { setSearchTerm(e.target.value) }} />
                        <button id='search-button' type='submit'>Search</button>
                    </form>
                </div>
            </main>
            {
                data.word!== undefined &&
                <section className='details-container'>
                    <div className='details-of-search'>
                        <div className='definition'>
                            <h2>{data.word}</h2>
                            <div className='audio-container'>
                                {
                                    data.phonetics && data.phonetics.map((item, index) => (
                                        <div key={index} className='audio-div'>
                                            <h2 className='heading'>{item.text}</h2>
                                            <audio id='audio-bar' src={item.audio} controls />
                                        </div>
                                    ))
                                }
                            </div>

                        </div>
                        <div className='meanings'>
                            {
                                data.meanings && data.meanings.map((defi, index) => (
                                    <div key={index} className='noun-div'>
                                        <h3 className='heading'>{defi.partOfSpeech}</h3>
                                        <p className='definition'><b>Definition: </b>{defi.definitions[0].definition}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </section>
            }
        </div>
    )
}

export default Dictionary