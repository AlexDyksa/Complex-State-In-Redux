import { SIGNIN_CHANGE_LOGIN, SIGNIN_CHANGE_PASSWORD } from './types';

export const changeSignInLogin = newLogin => ({
    type: SIGNIN_CHANGE_LOGIN,
    payload: newLogin
});

export const changeSignInPassword = newPassword => ({
    type: SIGNIN_CHANGE_PASSWORD,
    payload: newPassword
});