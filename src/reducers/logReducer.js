import { GET_LOGS, ADD_LOG, DELETE_LOG, SET_CURRENT, CLEAR_CURRENT, UPDATE_LOG, SEARCH_LOGS, SET_LOADING, LOGS_ERROR } from '../actions/types'

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
        case DELETE_LOG:
            return {
                ...state,
                current: state.logs.filter(log => log.id !== action.payload),
                loading: false
            }
        case UPDATE_LOG:
            return {
                ...state,
                logs: state.logs.map(log => log.id === action.payload.id ? action.payload : log),
                loading: false
            }
        case SET_CURRENT:
            return {
                ...state,
                current: action.payload
            }
        case CLEAR_CURRENT:
            return {
                ...state,
                current: null
            }
        case SEARCH_LOGS:
            return {
                ...state,
                logs: action.payload
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