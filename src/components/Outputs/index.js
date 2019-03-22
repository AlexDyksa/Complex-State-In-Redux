import React, { Component } from 'react';
import './styles.css'

class Outputs extends Component {
    render() {
        const { signIn, signUp } = this.props.data;

        return (
            <div className="app__outputs outputs">
                <h2 className="outputs__title">Two Components - One Store for their States</h2>
                <div className="outputs__result outputs-result">
                    <h3 className="outputs-result__title">APP STATE</h3>
                    <hr />
                    <table>
                        <tbody>
                            <tr>
                                <td className="outputs-result__left-block">
                                    Sign In: &#123; <br /> &nbsp;&nbsp;&nbsp;login: {signIn.signInLogin}, <br />&nbsp;&nbsp;&nbsp;password: {signIn.signInPassword}<br />&#125;
                                </td>
                                <td className="outputs-result__right-block">
                                    Sign Up: &#123; <br /> &nbsp;&nbsp;&nbsp;login: {signUp.signUpLogin}, <br />&nbsp;&nbsp;&nbsp;password: {signUp.signUpPassword},<br />&nbsp;&nbsp;&nbsp;repeatPassword: {signUp.signUpRepeatPassword}<br />&#125;
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Outputs;