import { GET_LOGS, ADD_LOG, SET_LOADING, LOGS_ERROR } from '../actions/types'

const initialState = {
    logs: null,
    current: null,
    loading: false,
    error: null
};

const logReducer = ( state = initialState, action ) => {
    switch (action.type) {
       case GET_LOGS:
        return {
            ...state,
            logs: action.payload,
            loading: false
        }
        case ADD_LOG:
            return {
                logs: [...state.logs, action.payload],
                loading: false
            }
       case SET_LOADING:
            return{
                ...state,
                loading: true
            }
        case LOGS_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}

export default logReducer;