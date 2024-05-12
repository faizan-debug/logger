import { GET_LOGS, ADD_LOG, DELETE_LOG, SET_LOADING, LOGS_ERROR } from './types'


//Action to get log
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
            type: LOGS_ERROR,
            payload: error.response.data
        })
    }
}

//Action to add log
export const addLog = (log) => async dispatch => {
    try {
         //Set Loading to true
         setLoading();
         //Fetch from API
         const res = await fetch('/logs', {
            method: 'POST',
            body: JSON.stringify(log),
            headers: {
                'Content-Type': 'application/json'
            }
         });

         const data = await res.json();

         //Dispatch
         dispatch({
            type: ADD_LOG,
            payload: data
         })   
    } catch (error) {
        dispatch({
            type: LOGS_ERROR,
            payload: error.response.data
        })
    }
}

//Action to delete log
export const deleteLog = (id) => async dispatch => {
    try {
         //Set Loading to true
         setLoading();
         //Fetch from API
         await fetch(`/logs/${id}`, {
            method: 'DELETE'
         })
         //Dispatch
         dispatch({
            type: DELETE_LOG,
            payload: id
         })   
    } catch (error) {
        dispatch({
            type: LOGS_ERROR,
            payload: error.response.data
        })
    }
}


//Set Loading to true
export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}