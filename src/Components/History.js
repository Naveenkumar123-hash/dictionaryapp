import axios from 'axios';
import React, { useState } from 'react'


const History = () => {

    const [data, setData] = useState([]);
    // console.log(data)

  const displayHistory = (e) => {
    e.preventDefault();
    const link = e.target.getAttribute('link')
    axios.get(link)
    .then((response)=>{
      // console.log(response.data[0])
      setData(response.data[0])
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  let history = JSON.parse(localStorage.getItem("history"));
  return (
      <div >
        <h1 className='history-heading'>History</h1>
        <div className='history-container'>
          {
            history && history.map((item, index) => (
              <div key={index} onClick={(e)=>displayHistory(e)}>
                <p className='history' link={item.link}>{item.word}</p>
              </div>
            ))
          }
        </div>
        {
          data.word!== undefined && (
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
          )
        }
      </div>
      
  )
}

export default History