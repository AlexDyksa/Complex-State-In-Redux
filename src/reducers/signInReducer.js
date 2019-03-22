import { SIGNIN_CHANGE_LOGIN, SIGNIN_CHANGE_PASSWORD } from '../actions/types';

const initialState = {
    signInLogin: '',
    signInPassword: ''
};

export const signInReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNIN_CHANGE_LOGIN:
            return {
                ...state,
                signInLogin: action.payload
            };
        case SIGNIN_CHANGE_PASSWORD:
            return {
                ...state,
                signInPassword: action.payload
            };
        default:
            return state;
    }
};