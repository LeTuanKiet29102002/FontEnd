import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import * as actions from "../../store/actions";
import Navigator from '../../components/Navigator';
import { adminMenu } from './menuApp';
import './Header.scss';
import {LANGUAGES}  from "../../utils";

class Header extends Component {

    handleChangeLanguage=(language)=>{
        this.props.changeLanguageAppRedux(language);

        
    }
    render() {

        const { processLogout,language, userInfo } = this.props;
        // let language = this.props.language;
        // console.log('check lang:',language);
        return (
            <div className="header-container">
                {/* thanh navigator */}
                <div className="header-tabs-container">
                    <Navigator menus={adminMenu} />
                </div>
                <div className='language'>
                    <span className='welcome'><FormattedMessage id="home-header.welcome"/>, {userInfo&&userInfo.firstName?userInfo.firstName:''}</span>

                    <div className={language=== LANGUAGES.VI ? 'language-vi active': 'language-vi'}><span onClick={()=>this.handleChangeLanguage(LANGUAGES.VI)}>VN</span></div>
                    <div className={language=== LANGUAGES.EN ? 'language-en active': 'language-en'}><span onClick={()=>this.handleChangeLanguage(LANGUAGES.EN)}>EN</span></div>
                    {/* nút logout */}
                    <div className="btn btn-logout" onClick={processLogout}>
                        <i className="fas fa-sign-out-alt"></i>
                    </div>
                </div>

                
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
        userInfo: state.user.userInfo,


    };
};

const mapDispatchToProps = dispatch => {
    return {
        processLogout: () => dispatch(actions.processLogout()),
        changeLanguageAppRedux:(language)=> dispatch(actions.changeLanguageApp(language))

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
