import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import SignIn from './containers/signInContainer';


class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="app__inner">
                    <div className="app__row">
                        <h1>Complex State in Redux</h1>
                    </div>
                    <div className="app__row">
                        <div className="app__col">
                            <SignIn />
                        </div>
                        <div className="app__col">
                            {/* <SignUp /> */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// propTypes
SignIn.propTypes = {
    login: PropTypes.oneOfType(
        [PropTypes.string, PropTypes.number]
    ),
    password: PropTypes.oneOfType(
        [PropTypes.string, PropTypes.number]
    )
};


export default App;
