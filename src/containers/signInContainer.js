import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SignIn from '../components/SignIn';
import { changeSignInLogin, changeSignInPassword } from '../actions/signInActions';

const mapStateToProps = state => ({
    login: state.signIn.signInLogin,
    password: state.signIn.signInPassword
});

const mapDispatchToProps = dispatch => ({
    changeLogin: bindActionCreators(changeSignInLogin, dispatch),
    changePassword: bindActionCreators(changeSignInPassword, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);


