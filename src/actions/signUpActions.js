import { SIGNUP_CHANGE_LOGIN, SIGNUP_CHANGE_PASSWORD, SIGNUP_CHANGE_REPEAT_PASSWORD } from './types';

export const changeSignUpLogin = newLogin => ({
    type: SIGNUP_CHANGE_LOGIN,
    payload: newLogin
});

export const changeSignUpPassword = newPassword => ({
    type: SIGNUP_CHANGE_PASSWORD,
    payload: newPassword
});

export const changeSignUpRepeatPassword = newPassword => ({
    type: SIGNUP_CHANGE_REPEAT_PASSWORD,
    payload: newPassword
});