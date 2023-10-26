import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { getAllCodeService } from '../../../services/userService';
import { LANGUAGES } from "../../../utils";
import *as actions from "../../../store/actions";
import { Image } from 'antd';
import './UserRedux.scss';
class UserRedux extends Component {
    constructor(props) {
        super(props);
        this.state = {
            genderArr: [],
            positionArr: [],
            roleArr: [],
            previewImgURL:'',

            email:'',
            password:'',
            firstName:'',
            lastName:'',
            phoneNumber:'',
            address:'',
            gender:'',
            position:'',
            role:'',
            avatar:'',
        }
    }

    async componentDidMount() {
        this.props.getGenderStart();
        this.props.getPositionStart();
        this.props.getRoleStart();
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

    componentDidUpdate(prevProps, prevState, snapshot) {
        let arrGenders = this.props.genderRedux;
        let arrPositions = this.props.positionRedux;
        let arrRoles = this.props.roleRedux;

        if (prevProps.genderRedux !== this.props.genderRedux) {
            this.setState({
                genderArr: arrGenders,
                gender:arrGenders && arrGenders.length>0?arrGenders[0].key:''
            });
        }
        if (prevProps.positionRedux !== this.props.positionRedux) {
            this.setState({
                positionArr: arrPositions,
                position:arrPositions && arrPositions.length>0?arrPositions[0].key:''

            });
        }
        if (prevProps.roleRedux !== this.props.roleRedux) {
            this.setState({
                roleArr: arrRoles,
                role:arrRoles&&arrRoles.length>0?arrRoles[0].key:''
            });
        }

    }

    handleOnchangeImage = (event)=>{
        let data = event.target.files;
        let file = data[0];
        if(file){
            let objectUrl = URL.createObjectURL(file);
            this.setState({
                previewImgURL:objectUrl,
                avatar:file
            })
        }


    }
    checkValidateInput=()=>{
        let isValid = true;
        let arrCheck = ['email', 'password', 'firstName', 'lastName', 'phoneNumber', 'address']
        for(let i=0; i<arrCheck.length; i++){
            if(!this.state[arrCheck[i]]){
                isValid=false;
                alert('This input is required: '+arrCheck[i]);
                break;
            }
        }
        return isValid;
    }

    handleSaveUser=()=>{
        let isValid = this.checkValidateInput();
        if(isValid===false) {
            return ;
        }
        //fire redux action
        this.props.createNewUser({
            email: this.state.email,
            password: this.state.password,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            address: this.state.address,
            phoneNumber: this.state.phoneNumber,
            gender: this.state.gender,
            roleId: this.state.role,
            positionId: this.state.position,            
        })
    }

    onChangeInput=(event, id)=>{
        let copyState ={...this.state}
        copyState[id]=event.target.value;

        this.setState({
            ...copyState
        })
    }

    render() {
        // console.log('letuankiet check state', this.state);
        let genders = this.state.genderArr;
        let positions = this.state.positionArr;
        let roles = this.state.roleArr;
        let language = this.props.language;
        let isGetGender = this.props.isLoadingGender;

        let {email, password, firstName, lastName, phoneNumber, address, gender, position, role, avatar}= this.state;
        // console.log('kiet check state from redux : ', this.state);
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
                            <div className='col-12 mt-3'><FormattedMessage id={"manage-user.add"} /></div>
                            <div className='col-12'>
                                {isGetGender === true ? (
                                    <i className="fas fa-spinner fa-spin"></i>
                                ) : null}
                                {isGetGender === true ? 'Loading genders' : ''}
                            </div>
                            <div className='col-6 '>
                                <label><FormattedMessage id={"manage-user.email"} /></label>
                                <input className='form-control' type='email' 
                                value={email}
                                onChange={(event)=>this.onChangeInput(event, 'email')}
                                />
                            </div>
                            <div className='col-6 '>
                                <label><FormattedMessage id={"manage-user.password"} /></label>
                                <input className='form-control' type='password' 
                                value={password}
                                onChange={(event)=>this.onChangeInput(event, 'password')}
                                />
                            </div>
                            <div className='col-6 '>
                                <label><FormattedMessage id={"manage-user.firstname"} /></label>
                                <input className='form-control' type='text' 
                                value={firstName}
                                onChange={(event)=>this.onChangeInput(event, 'firstName')}
                                />
                            </div>
                            <div className='col-6 '>
                                <label><FormattedMessage id={"manage-user.lastname"} /></label>
                                <input className='form-control' type='text' 
                                value={lastName}
                                onChange={(event)=>this.onChangeInput(event, 'lastName')}
                                />
                            </div>
                            <div className='col-3 '>
                                <label><FormattedMessage id={"manage-user.phonenumber"} /></label>
                                <input className='form-control' type='text'
                                value={phoneNumber}
                                onChange={(event)=>this.onChangeInput(event, 'phoneNumber')}
                                 />
                            </div>
                            <div className='col-9 '>
                                <label><FormattedMessage id={"manage-user.address"} /></label>
                                <input className='form-control' type='text'
                                value={address}
                                onChange={(event)=>this.onChangeInput(event, 'address')}
                                 />
                            </div>
                            <div className='col-3 '>
                                <label><FormattedMessage id={"manage-user.gender"} /></label>
                                <select className='form-control'
                                onChange={(event)=>this.onChangeInput(event, 'gender')}
                                >
                                    {genders && genders.length > 0 &&
                                        genders.map((item, index) => {
                                            return (
                                                <option key={index} value={item.key}>{language === LANGUAGES.VI ? item.valueVi : item.valueEn}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            <div className='col-3 '>
                                <label><FormattedMessage id={"manage-user.position"} /></label>
                                <select className='form-control'
                                onChange={(event)=>this.onChangeInput(event, 'position')}
                                >
                                    {positions && positions.length > 0 &&
                                        positions.map((item, index) => {
                                            return (
                                                <option key={index} value={item.key}>{language === LANGUAGES.VI ? item.valueVi : item.valueEn}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            <div className='col-3 '>
                                <label><FormattedMessage id={"manage-user.roleid"} /></label>
                                <select className='form-control'
                                onChange={(event)=>this.onChangeInput(event, 'role')}
                                >
                                    {roles && roles.length > 0 &&
                                        roles.map((item, index) => {
                                            return (
                                                <option key={index} value={item.key}>{language === LANGUAGES.VI ? item.valueVi : item.valueEn}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            <div className='col-3 '>
                                <label><FormattedMessage id={"manage-user.image"} /></label>
                                <div className='preview-img-container'>
                                    <input id='previewImg' type='file' hidden onChange={(event)=>this.handleOnchangeImage(event)} />
                                    {/* <input id='previewImg' type='file' hidden onChange={this.handleOnchangeImage} /> */}

                                    <label className='label-upload' htmlFor="previewImg"><FormattedMessage id={"manage-user.upload"} /><i className="fas fa-upload"></i></label>
                                    {/* <div className='preview-image'></div> */}
                                    <Image
                                    width={200}
                                    height={200}
                                    src={this.state.previewImgURL}
                                    fallback="data:image/png;base64,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"
                                    />
                                    
                                </div>
                            </div>
                            <div className='col-12 mt-3'>
                                <button className='btn btn-primary'
                                onClick={()=>this.handleSaveUser()}
                                ><FormattedMessage id={"manage-user.save"} /></button>
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
        genderRedux: state.admin.genders,
        positionRedux: state.admin.positions,
        roleRedux: state.admin.roles,
        isLoadingGender: state.admin.isLoadingGender,

    };
};

const mapDispatchToProps = dispatch => {
    return {
        // processLogout: () => dispatch(actions.processLogout()),
        // changeLanguageAppRedux:(language)=> dispatch(actions.changeLanguageApp(language))
        getGenderStart: () => dispatch(actions.fetchGenderStart()),

        getPositionStart: () => dispatch(actions.fetchPositionStart()),

        getRoleStart: () => dispatch(actions.fetchRoleStart()),

        createNewUser:(data)=> dispatch(actions.createNewUser(data))

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
