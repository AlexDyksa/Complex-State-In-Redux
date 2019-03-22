import React, { Component } from 'react';
import './styles.css'

class SignIn extends Component {
    render() {
        return (
            <form className="sign-in">
                <input type="text" className="sign-in__login" />
                <input type="password" className="sign-in__password" />
            </form>
        );
    }
}

export default SignIn;