import { SIGNUP_CHANGE_LOGIN, SIGNUP_CHANGE_PASSWORD, SIGNUP_CHANGE_REPEAT_PASSWORD } from '../actions/types';

const initialState = {
    signUpLogin: '',
    signUpPassword: '',
    signUpRepeatPassword: ''
};

export const signUpReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP_CHANGE_LOGIN:
            return {
                ...state,
                signUpLogin: action.payload
            };
        case SIGNUP_CHANGE_PASSWORD:
            return {
                ...state,
                signUpPassword: action.payload
            };
        case SIGNUP_CHANGE_REPEAT_PASSWORD:
            return {
                ...state,
                signUpRepeatPassword: action.payload
            };
        default:
            return state;
    }
};