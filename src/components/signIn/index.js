import React, { Component } from 'react';
import './styles.css'

class SignIn extends Component {
    handleSubmit = e => {
        e.preventDefault();
    };

    handleChangeLogin = e => {
        this.props.changeLogin(e.target.value);
    };

    handleChangePassword = e => {
        this.props.changePassword(e.target.value);
    };

    handleClickBtn = () => {
        alert('You\'ve Signed In');
    };

    render() {
        return (
            <React.Fragment>
                <h2 className="component-title">Component #1</h2>
                <form
                    className="sign-in"
                    onSubmit={this.handleSubmit}
                >
                    <input
                        type="text"
                        className="sign-in__login"
                        placeholder="login"
                        value={this.props.login}
                        onChange={this.handleChangeLogin}
                    />
                    <input
                        type="password"
                        className="sign-in__password"
                        placeholder="password"
                        value={this.props.password}
                        onChange={this.handleChangePassword}
                    />
                    <input
                        type="submit"
                        className="sing-in__submit"
                        value="Sign In"
                        onClick={this.handleClickBtn}
                    />
                </form>
            </React.Fragment>
        );
    }
}

export default SignIn;