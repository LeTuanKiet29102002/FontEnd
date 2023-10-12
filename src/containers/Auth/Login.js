import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
// import * as actions from "../store/actions";
import * as actions from "../../store/actions";

import './Login.scss';
import { FormattedMessage } from 'react-intl';
import { handleLoginApi } from '../../services/userService';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isShowPassword: false,
            errMessage: '',
            isUsernameFocused: false,
            isPasswordFocused: false,
            changeBackground: false,
        }
    }

    handleOnChangePassword = (event) => {
        this.setState({
            password: event.target.value
        })
        // console.log(event.target.value);
    }

    handleOnChangeUsername = (event) => {
        this.setState({
            username: event.target.value
        })
        // console.log(event.target.value);
    }

    handleLogin = async () => {
        this.setState({
            errMessage: ''
        })
        try {

            let data = await handleLoginApi(this.state.username, this.state.password)
            if (data && data.errCode !== 0) {
                this.setState({ errMessage: data.message });
            }
            if (data && data.errCode === 0) {
                this.props.userLoginSuccess(data.user);
                console.log('Login success!');
            }

        } catch (e) {
            if (e.response) {
                if (e.response.data) {
                    this.setState({
                        errMessage: e.response.data.message
                    })
                }
            }
            console.log('letuankiet', e.response);

        }
    }

    handleShowHidePassword = () => {
        this.setState({
            isShowPassword: !this.state.isShowPassword,
            changeBackground:!this.state.changeBackground
        });
    }

    handleFocus = (inputName) => {
        if (inputName === 'username') {
            this.setState({ isUsernameFocused: true })
        }
        else if (inputName === 'password') {
            this.setState({ isPasswordFocused: true })
        }
    }

    handleBlur = (inputName) => {
        if (inputName === 'username') {
            this.setState({ isUsernameFocused: false });
        }
        else if (inputName === 'password') {
            this.setState({ isPasswordFocused: false });
        }
    }

    render() {
        return (
            <div className='main'>
                <div className={this.state.changeBackground ? "login-background-active" : "login-background"}>
                    <div className='login-container'>
                        <div className='login-content row'>
                            <div className='col-12 login-text'>Login</div>
                            <div className='col-12 form-group login-input'>
                                <label className={this.state.isUsernameFocused ? "label-text-active" : "label-text"}>Username:</label>
                                <input type='text' className='form-control' placeholder='Enter your username' value={this.state.username}
                                    onChange={(event) => this.handleOnChangeUsername(event)}
                                    onFocus={() => this.handleFocus('username')}
                                    onBlur={() => this.handleBlur('username')}
                                />
                            </div>
                            <div className='col-12 form-group login-input'>
                                <label className={this.state.isPasswordFocused ? "label-text-active" : "label-text"}>Password:</label>
                                <div className='custom-input-password'>
                                    <input type={this.state.isShowPassword ? 'text' : 'password'} className='form-control' placeholder='Enter your password' value={this.state.password}
                                        onChange={(event) => this.handleOnChangePassword(event)}
                                        onFocus={() => this.handleFocus('password')}
                                        onBlur={() => this.handleBlur('password')}
                                    />
                                    <span onClick={() => {
                                        this.handleShowHidePassword();
                                    }}>
                                        <i className={this.state.isShowPassword ? "fas fa-eye" : "fas fa-eye-slash"}></i>
                                    </span>
                                </div>
                            </div>
                            <div className='col-12' style={{ color: 'red' }}>
                                {this.state.errMessage}
                            </div>
                            <div className='col-12 btn-login'>
                                <button className='btn-login-text' onClick={() => { this.handleLogin() }}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    Login
                                </button>
                            </div>
                            <div className='col-12 '>
                                <span className='forgot-password'>Forgot your password</span>
                            </div>
                            <div className='col-12 text-center mt-3' >
                                <span className='login-browser '>Or login with: </span>
                            </div>
                            <div className='col-12 login-social'>
                                <i className="fab fa-google-plus-g google"></i>
                                <i className="fab fa-facebook-f facebook"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        // userLoginFail: () => dispatch(actions.adminLoginFail()),
        userLoginSuccess: (userInfor) => dispatch(actions.userLoginSuccess(userInfor)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
