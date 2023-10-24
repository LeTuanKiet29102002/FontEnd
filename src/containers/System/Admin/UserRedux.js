import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { getAllCodeService } from '../../../services/userService'; 
import {LANGUAGES} from "../../../utils";
import *as actions from "../../../store/actions"
class UserRedux extends Component {
    constructor(props) {
        super(props);
        this.state = {
            genderArr:[]
        }
    }

    async componentDidMount() {
        this.props.getGenderStart();
        // this.props.dispatch(actions.getGenderStart());
        // try {
        //     let res =await getAllCodeService('gender');
        //     if(res&&res.errCode===0){
        //         this.setState({
        //             genderArr:res.data
        //         })
        //     }
        // } catch (e) {
        //     console.log(e);
        // }
    }

    componentDidUpdate(prevProps,prevState, snapshot) {
        if(prevProps.genderRedux!==this.props.genderRedux){
            this.setState({
                genderArr:this.props.genderRedux
            });
        }

    }
    
    render() {
        // console.log('letuankiet check state', this.state);
        let genders = this.state.genderArr;
        let language = this.props.language;
        console.log('kiet check props from redux : ', this.props.genderRedux);
        return (
            <div className='user-redux-container'>
                <div className='title'>
                    {/* <div className='heart'><i className="fas fa-heart"></i></div> */}
                    User redux with Le Tuan Kiet
                    {/* <div className='heart'><i className="fas fa-heart"></i></div> */}
                </div>
                <div className="user-redux-body" >
                    <div className='container'>
                        <div className='row'>
                            <div className='col-12 mt-3'><FormattedMessage id={"manage-user.add"}/></div>
                            <div className='col-6 '>
                                <label><FormattedMessage id={"manage-user.email"}/></label>
                                <input className='form-control' type='email' />
                            </div>
                            <div className='col-6 '>
                                <label><FormattedMessage id={"manage-user.password"}/></label>
                                <input className='form-control' type='password' />
                            </div>
                            <div className='col-6 '>
                                <label><FormattedMessage id={"manage-user.firstname"}/></label>
                                <input className='form-control' type='email' />
                            </div>
                            <div className='col-6 '>
                                <label><FormattedMessage id={"manage-user.lastname"}/></label>
                                <input className='form-control' type='email' />
                            </div>
                            <div className='col-3 '>
                                <label><FormattedMessage id={"manage-user.phonenumber"}/></label>
                                <input className='form-control' type='email' />
                            </div>
                            <div className='col-9 '>
                                <label><FormattedMessage id={"manage-user.address"}/></label>
                                <input className='form-control' type='email' />
                            </div>
                            <div className='col-3 '>
                                <label><FormattedMessage id={"manage-user.gender"}/></label>
                                <select className='form-control'>
                                    {genders && genders.length >0 &&
                                    genders.map((item, index)=>{
                                        return (
                                            <option key={index}>{language=== LANGUAGES.VI?item.valueVi:item.valueEn}</option>
                                        )
                                    })
                                    }
                                </select>
                            </div>
                            <div className='col-3 '>
                                <label><FormattedMessage id={"manage-user.position"}/></label>
                                <select className='form-control'>
                                    <option selected>Choose...</option>
                                    <option>...</option>
                                </select>
                            </div>
                            <div className='col-3 '>
                                <label><FormattedMessage id={"manage-user.roleid"}/></label>
                                <select className='form-control'>
                                    <option selected>Choose...</option>
                                    <option>...</option>
                                </select>
                            </div>
                            <div className='col-3 '>
                                <label><FormattedMessage id={"manage-user.image"}/></label>
                                <input type='text' className='form-control' />
                            </div>
                            <div className='col-12 mt-3'>
                                <button className='btn btn-primary'><FormattedMessage id={"manage-user.save"}/></button>
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
        language: state.app.language,
        genderRedux: state.admin.genders

    };
};

const mapDispatchToProps = dispatch => {
    return {
        // processLogout: () => dispatch(actions.processLogout()),
        // changeLanguageAppRedux:(language)=> dispatch(actions.changeLanguageApp(language))
        getGenderStart:()=>dispatch(actions.fetchGenderStart()),

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
