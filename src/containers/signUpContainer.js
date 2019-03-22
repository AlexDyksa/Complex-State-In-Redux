import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SignUp from '../components/SignUp';
import { changeSignUpLogin, changeSignUpPassword, changeSignUpRepeatPassword } from '../actions/signUpActions';

const mapStateToProps = state => ({
    login: state.signUp.signUpLogin,
    password: state.signUp.signUpPassword,
    repeatPassword: state.signUp.signUpRepeatPassword,
});

const mapDispatchToProps = dispatch => ({
    changeLogin: bindActionCreators(changeSignUpLogin, dispatch),
    changePassword: bindActionCreators(changeSignUpPassword, dispatch),
    changeRepeatPassword: bindActionCreators(changeSignUpRepeatPassword, dispatch)

});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);