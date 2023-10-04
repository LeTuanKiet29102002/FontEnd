import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {emitter} from '../../utils/emitter';

class ModalUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email:'',
            password: '',
            firstName:'',
            lastName:'',
            address:'',
        };

        this.listenToEmitter();

    }

    listenToEmitter() { 
        emitter.on('EVENT_CLEAR_MODAL_DATA',()=>{
            this.setState({
                email:'',
                password: '',
                firstName:'',
                lastName:'',
                address:'',
            });
        })
        // emitter.on('EVENT_CLEAR_MODAL_DATA',data=>{
        //     console.log('listen emitter from parent', data);
        // })
    }

    componentDidMount() {
        console.log('mouting modal');
    }

    toggle = () => {
        this.props.toggleFromParent();
    }

    handleOnchangeInput=(event, id) => {
        //bad code
        // this.state[id]=event.target.value;
        // this.setState({
        //     ...this.state,
        // },()=>{
        //     // console.log('check bad state:',this.state);
        // })

        //good code
        let copyState = {...this.state};
        copyState[id]=event.target.value;
        this.setState({
            ...copyState
        },()=>{
        // console.log('Check good state',this.state);
        })
        
    }

    checkValideInput = ()=>{
        let isValid = true ;
        let arrInput = ['email','password','firstName','lastName','address'];
        for(let i =0 ;i<arrInput.length ;i++){
            if(!this.state[arrInput[i]]){
                isValid = false ;
                alert('Missing parameter: '+ arrInput[i]);
                break;
            }
        }
        return isValid;
    }

    handleAddNewUser =()=>{
        let isValid =this.checkValideInput(); 
        if(isValid===true) {
            this.props.createNewUser(this.state);
        }
    }

    render() {
        return (
            <div className="text-center" >
                <Modal
                    isOpen={this.props.isOpen}
                    toggle={() => { this.toggle() }}
                    className={'Modal-user-container'}
                    size='lg'
                    centered
                >
                    <ModalHeader toggle={() => { this.toggle() }} >Create a new</ModalHeader>
                    <ModalBody>
                    <div className='modal-user-body'>
                        <div className='input-container'>
                            <label>Email:</label>
                            <input type="text" onChange={(event)=>{this.handleOnchangeInput(event,'email')}} 
                            value={this.state.email}/>
                        </div>
                        <div className='input-container'>
                            <label>Password:</label>
                            <input type="password" onChange={(event)=>{this.handleOnchangeInput(event,'password')}} value={this.state.password}/>
                        </div>
                        <div className='input-container'>
                            <label>First name:</label>
                            <input type="text" onChange={(event)=>{this.handleOnchangeInput(event,'firstName')}}
                                value={this.state.firstName}
                            />
                        </div>
                        <div className='input-container'>
                            <label>Last name:</label>
                            <input type="text" onChange={(event)=>{this.handleOnchangeInput(event,'lastName')}}
                                value={this.state.lastName}
                            />
                        </div>
                        <div className='input-container'>
                            <label>Address:</label>
                            <input type="text" onChange={(event)=>{this.handleOnchangeInput(event,'address')}}
                                value={this.state.address}
                            />
                        </div>
                    </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary"
                         className='px-3'
                          onClick={() => { this.handleAddNewUser() }} >
                            Add new
                        </Button>{' '}
                        <Button color="secondary" className='px-3' onClick={() => { this.toggle() }} >
                            Close
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);







