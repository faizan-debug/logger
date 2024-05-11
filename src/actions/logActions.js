import { GET_LOGS, SET_LOADING, LOGS_ERROR } from './types'



export const getLogs = () => async dispatch => {
    try {
         //Set Loading to true
         setLoading();
         //Fetch from API
         const res = await fetch('/logs')
         const data = await res.json();
         //Dispatch
         dispatch({
            type: GET_LOGS,
            payload: data
         })   
    } catch (error) {
        dispatch({
            type: error,
            payload: error.reponse.data
        })
    }
}

//Set Loading to true
export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}