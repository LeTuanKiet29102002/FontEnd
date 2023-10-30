import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import "./TableManageUser.scss";
import *as actions from "../../../store/actions";
import { Button, Checkbox, Input, Modal, Select, Table, Tooltip } from "antd";
import {
    DeleteOutlined,
    EditOutlined,
    ExclamationCircleOutlined,
    MoneyCollectOutlined,
    PlusOutlined,
} from "@ant-design/icons";
class TableManageUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userRedux: [],
        };
    }
    componentDidMount() {
        this.props.fetchUserRedux()
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.listUsers !== this.props.listUsers) {
            this.setState({
                usersRedux: this.props.listUsers,
            });
        }
    }

    handleDeleteUser=(user)=>{
        this.props.deleteAUserRedux(user.id);
    }

    render() {
        // console.log('letuankiet check all users', this.props.listUsers);
        // console.log('letuankiet check state', this.state.usersRedux);
        let arrUsers = this.state.usersRedux;
        return (
            <table id="TableManageUser">
                <tbody>
                    <tr>
                        <th>Email</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Address</th>
                        <th>Action</th>
                    </tr>
                    {arrUsers && arrUsers.length > 0 &&
                        arrUsers.map((item, index) => {
                            return (
                                <tr key = {index}>
                                    <td>{item.email}</td>
                                    <td>{item.firstName}</td>
                                    <td>{item.lastName}</td>
                                    <td>{item.address}</td>
                                    <td >
                                        <Tooltip title="Sửa">
                                            <Button
                                                className="btn-action"
                                                shape="circle"
                                                icon={<EditOutlined />}
                                                onClick={() => this.handleEditUser(item)}
                                            />
                                        </Tooltip>
                                        <Tooltip title="Xóa">
                                            <Button
                                                shape="circle"
                                                icon={<DeleteOutlined />}
                                                onClick={() => this.handleDeleteUser(item)}
                                            />
                                        </Tooltip>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        listUsers: state.admin.users
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUserRedux: () => dispatch(actions.fetchAllUsersStart()),
        deleteAUserRedux:(id)=> dispatch(actions.deleteAUser(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableManageUser);
