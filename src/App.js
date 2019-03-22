import React, { Component } from 'react';
import './App.css';
import SignIn from './containers/signInContainer';
import SignUp from './containers/signUpContainer';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="app__inner">
                    <div className="app__row">
                        <div className="app__col">
                            <SignIn />
                        </div>
                        <div className="app__col">
                            <SignUp />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
