import { IUser } from '../components/home/UsersList';
import { Dispatch, ActionCreatorsMapObject } from 'redux';
import axios from 'axios';
import { GET_ALL_USERS, ADD_USER } from './actionTypes';

export const usersActions: ActionCreatorsMapObject = {
    getAllUsersSuccess(users: IUser[]) {
        return {
            users,
            type: GET_ALL_USERS
        }
    },

    getAllUsers() {
        return (dispatch: Dispatch<any>) => {
            return axios.get('/api/getAllUsers')
                .then((response) => {
                    const users = response.data;
                    dispatch(usersActions.getAllUsersSuccess(users));
                })
                .catch((error) => {
                    alert(error);
                });
        };
    },

    addUserSuccess(user: IUser) {
        return {
            user,
            type: ADD_USER
        }
    },

    addUser(user: IUser) {
        return (dispatch: Dispatch<any>) => {
            return axios.post('/api/addUser', user)
                .then((response) => {
                    const user = response.data;
                    dispatch(usersActions.addUserSuccess(user));
                })
                .catch((error) => {
                    alert(error);
                });
        };
    }
}