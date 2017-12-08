import { Reducer } from 'redux';
import { IUser } from '../components/home/UsersList';
import { GET_ALL_USERS, ADD_USER } from '../actions/actionTypes';
import { initialState } from './initialState';

export const usersReducer: Reducer<IUser[]> = (state = initialState.users, action) => {
    switch (action.type) {
        case GET_ALL_USERS:
            return [
                ...state,
                ...action.users
            ];

        case ADD_USER:
            return [
                ...state,
                action.user
            ];

        default:
            return state;
    }
}