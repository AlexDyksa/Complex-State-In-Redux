import React, { Component } from 'react';
import './styles.css'

class SignUp extends Component {
    handleSubmit = e => {
        e.preventDefault();
    }

    handleChangeLogin = e => {
        this.props.changeLogin(e.target.value);
    }

    handleChangePassword = e => {
        this.props.changePassword(e.target.value);
    }

    handleChangeRepeatPassword = e => {
        this.props.changeRepeatPassword(e.target.value);
    }

    render() {
        return (
            <form
                className="sign-up"
                onSubmit={this.handleSubmit}
            >
                <input
                    type="text"
                    className="sign-up__login"
                    placeholder="login"
                    value={this.props.login}
                    onChange={this.handleChangeLogin}
                />
                <input
                    type="password"
                    className="sign-up__password"
                    placeholder="password"
                    value={this.props.password}
                    onChange={this.handleChangePassword}
                />
                <input
                    type="password"
                    className="sign-up__repeat-password"
                    placeholder="repeat password"
                    value={this.props.repeatPassword}
                    onChange={this.handleChangeRepeatPassword}
                />
                <input
                    type="submit"
                    className="sing-up__submit"
                    value="Sign Up"
                />
            </form>
        );
    }
}

export default SignUp;