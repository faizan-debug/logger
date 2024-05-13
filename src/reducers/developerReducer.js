import { GET_DEVELOPERS, ADD_DEVELOPER, DELETE_DEVELOPER, DEVELOPER_ERROR, SET_LOADING } from '../actions/types'


const initialState = {
    firstName: '',
    lastName: '',
    loading: false,
};

const developerReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case GET_DEVELOPERS:
        return {
            ...state,
            Developer: action.payload,
            loading: false
        }
        case ADD_DEVELOPER:
            return {
                Developer: [...state.Developer, action.payload],
                loading: false
            }
        case DELETE_DEVELOPER:
            return {
                ...state,
                current: state.Developer.filter(developer => developer.id !== action.payload),
                loading: false
            }
        case SET_LOADING:
            return{
                ...state,
                loading: true
            }
        case DEVELOPER_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}

export default developerReducer;