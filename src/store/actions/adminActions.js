import actionTypes from './actionTypes';
import { getAllCodeService ,createNewUserService, getAllUsers,deleteUserService} from '../../services/userService'; 
import React from 'react';
import {toast } from 'react-toastify';

// export const fetchGenderStart = () => ({
//     type: actionTypes.FETCH_GENDER_START,
// })

export const fetchGenderStart =  () => {
    return async(dispatch,getState)=>{
        try {

            dispatch({
                type: actionTypes.FETCH_GENDER_START
            })
            let res = await getAllCodeService("GENDER");
            if(res && res.errCode===0){
                // console.log('le tuan kiet check get state', getState);
                dispatch(fetchGenderSuccess(res.data));
            }else{
                dispatch(fetchGenderFailed());

            }
        } catch (e) {
            dispatch(fetchGenderFailed());
            console.log('fetchGenderStart error',e);
        }

    }
}

export const fetchGenderSuccess = (genderData) => ({
    type: actionTypes.FETCH_GENDER_SUCCESS,
    data: genderData
})

export const fetchGenderFailed = () => ({
    type: actionTypes.FETCH_GENDER_FAILED,
})


export const fetchPositionStart =  () => {
    return async(dispatch,getState)=>{
        try {

            dispatch({
                type: actionTypes.FETCH_POSITION_START
            })
            let res = await getAllCodeService("POSITION");
            if(res && res.errCode===0){
                // console.log('le tuan kiet check get state', getState);
                dispatch(fetchPositionSuccess(res.data));
            }else{
                dispatch(fetchPositionFailed());

            }
        } catch (e) {
            dispatch(fetchPositionFailed());
            console.log('fetchPositionStart error',e);
        }

    }
}

export const fetchPositionSuccess = (positionData) => ({
    type: actionTypes.FETCH_POSITION_SUCCESS,
    data: positionData
})

export const fetchPositionFailed = () => ({
    type: actionTypes.FETCH_POSITION_FAILED,
})




export const fetchRoleStart =  () => {
    return async(dispatch,getState)=>{
        try {

            dispatch({
                type: actionTypes.FETCH_ROLE_START
            })
            let res = await getAllCodeService("ROLE");
            if(res && res.errCode===0){
                // console.log('le tuan kiet check get state', getState);
                dispatch(fetchRoleSuccess(res.data));
            }else{
                dispatch(fetchRoleFailed());

            }
        } catch (e) {
            dispatch(fetchRoleFailed());
            console.log('fetchRoleStart error',e);
        }

    }
}

export const fetchRoleSuccess = (roleData) => ({
    type: actionTypes.FETCH_ROLE_SUCCESS,
    data: roleData
})

export const fetchRoleFailed = () => ({
    type: actionTypes.FETCH_ROLE_FAILED,
})



export const createNewUser = (data) => {
    return async(dispatch,getState)=>{
        try {
            let res = await createNewUserService(data) ;
            console.log('kiet check create user redux: ',res);
            if(res && res.errCode===0){
                toast.success('create a new user success')
                // console.log('le tuan kiet check get state', getState);
                dispatch(saveUserSuccess());
                dispatch(fetchAllUsersStart());
            }else{
                dispatch(saveUserFailed());

            }
        } catch (e) {
            dispatch(fetchRoleFailed());
            console.log('fetchRoleStart error',e);
        }

    }
}


export const saveUserSuccess = () => ({
    type: actionTypes.CREATE_USER_SUCCESS,
})

export const saveUserFailed = () => ({
    type: actionTypes.CREATE_USER_FAILED,
})


export const fetchAllUsersStart =  () => {
    return async(dispatch,getState)=>{
        try {
            let res = await getAllUsers("ALL");
            if(res && res.errCode===0){
                // console.log('le tuan kiet check get state', getState);
                dispatch(fetchAllUsersSuccess(res.users.reverse()));
            }else{
                toast.error('fetch all users error!');
                dispatch(fetchAllUsersFailed());

            }
        } catch (e) {
            toast.error('fetch all users error!');
            dispatch(fetchAllUsersFailed());
            console.log('fetchAllUserStart error',e);
        }

    }
}

export const fetchAllUsersSuccess = (data) => ({
    type: actionTypes.FETCH_ALL_USERS_SUCCESS,
    users:data
})

export const fetchAllUsersFailed = () => ({
    type: actionTypes.FETCH_ALL_USERS_FAILED,
})


export const deleteAUser = (userId) => {
    return async(dispatch,getState)=>{
        try {
            let res = await deleteUserService(userId) ;
            console.log('kiet check create user redux: ',res);
            if(res && res.errCode===0){
                toast.success('delete a new user success')
                // console.log('le tuan kiet check get state', getState);
                dispatch(deleteUserSuccess());
                dispatch(fetchAllUsersStart());
            }else{
                toast.error('delete the user error!');
                dispatch(deleteUserFailed());

            }
        } catch (e) {
            toast.error('delete the user error!');
            dispatch(deleteUserFailed());
            console.log('fetchdeleteAUsersStart error',e);
        }

    }
}


export const deleteUserSuccess = () => ({
    type: actionTypes.DELETE_USER_SUCCESS,
})

export const deleteUserFailed = () => ({
    type: actionTypes.DELETE_USER_FAILED,
})