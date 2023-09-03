import { SEARCH_LOADING,SEARCH_ERROR,SEARCH_SUCCESS } from "./actionTypes";
import axios from "axios";

export const searchLoading = ()=>{
    return{
        type:SEARCH_LOADING,
    }
}

export const searchError = (error)=>{
    return{
        type:SEARCH_ERROR,
        payload:error
    }
}

export const searchSuccess = (data)=>{
    return{
        type:SEARCH_SUCCESS,
        payload:data
    }
}


export function getSearch(e){
    // e.preveneDefault();
    return (dispatch) => {
        dispatch(searchLoading());
        axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en`)
          .then((response) => {
                console.log("Search Data -> ", response.data);
                dispatch(searchSuccess(response.data[0]));
            })
          .catch((error) => {
                alert(error.response.data.title);
                console.log("Error -> ", error);
                dispatch(searchError(error));
            })
    }
}