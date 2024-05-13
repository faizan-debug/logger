import { GET_DEVELOPERS, ADD_DEVELOPER, DELETE_DEVELOPER, DEVELOPER_ERROR, SET_LOADING } from './types'


//Action to get developers
export const getDeveloper = () => async dispatch => {
    try {
         //Set Loading to true
         setLoading();
         //Fetch from API
         const res = await fetch('/developers')
         const data = await res.json();
         console.log(data);
         //Dispatch
         dispatch({
            type: GET_DEVELOPERS,
            payload: data
         })   
    } catch (error) {
        dispatch({
            type: DEVELOPER_ERROR,
            payload: error.response.data
        })
    }
}

//Action to add developer
export const addDeveloper = (developer) => async dispatch => {
    try {
         //Set Loading to true
         setLoading();
         //Fetch from API
         const res = await fetch('/developers', {
            method: 'POST',
            body: JSON.stringify(developer),
            headers: {
                'Content-Type': 'application/json'
            }
         });

         const data = await res.json();

         //Dispatch
         dispatch({
            type: ADD_DEVELOPER,
            payload: data
         })   
    } catch (error) {
        dispatch({
            type: DEVELOPER_ERROR,
            payload: error.response.data
        })
    }
}

//Action to delete developer
export const deleteDeveloper = (id) => async dispatch => {
    try {
         //Set Loading to true
         setLoading();
         //Fetch from API
         await fetch(`/developers/${id}`, {
            method: 'DELETE'
         })
         //Dispatch
         dispatch({
            type: DELETE_DEVELOPER,
            payload: id
         })   
    } catch (error) {
        dispatch({
            type: DEVELOPER_ERROR,
            payload: error.response && error.response.data ? error.response.data : 'Unknown error'
        })
    }
}


//Set Loading to true
export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}