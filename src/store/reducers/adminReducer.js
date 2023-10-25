import actionTypes from '../actions/actionTypes';
// import { getAllCodeService } from '../../services/userService'; 
const initialState = {
    isLoadingGender: false,
    genders:[],
    roles:[],
    positions:[]
}

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        //GENDERS
        case actionTypes.FETCH_GENDER_START:
            let copyState = {...state};
            copyState.isLoadingGender = true;
            // console.log('fire fetch gender start: ', action);
            return {
                ...copyState,
            }
        case actionTypes.FETCH_GENDER_SUCCESS:
            state.genders = action.data;
            state.isLoadingGender = false;

            // console.log('fire fetch gender success: ', action.data);

            return {
                
                ...state,
            }
        case actionTypes.FETCH_GENDER_FAILED:
            state.isLoadingGender = false;
            state.genders = [];
            // console.log('fire fetch gender failed: ', action);

            return {
                ...state,
            }
        //POSITIONS
        case actionTypes.FETCH_POSITION_SUCCESS:
            state.positions = action.data;
            // state.isLoadingGender = false;
            return {
                
                ...state,
            }
        case actionTypes.FETCH_POSITION_FAILED:
            // state.isLoadingGender = false;
            state.positions = [];
            return {
                ...state,
            }
        //ROLES
        case actionTypes.FETCH_ROLE_SUCCESS:
            state.roles = action.data;
            // state.isLoadingGender = false;
            return {
                
                ...state,
            }
        case actionTypes.FETCH_ROLE_FAILED:
            // state.isLoadingGender = false;
            state.roles = [];
            return {
                ...state,
            }
        default:
            return state;
    }
}

export default adminReducer;