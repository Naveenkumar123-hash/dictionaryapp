import { SEARCH_ERROR,SEARCH_LOADING,SEARCH_SUCCESS } from "../actions/actionTypes";



const initialState = {
    loading: false,
    error: null,
    data: []
}

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_LOADING:
            return {
               ...state,
                loading: true
            }
        case SEARCH_SUCCESS:
            return {
               ...state,
                loading: false,
                data: action.payload
            }
        case SEARCH_ERROR:
            return {
               ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

export default searchReducer