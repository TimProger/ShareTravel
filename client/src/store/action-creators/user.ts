import {UserAction, UserActionTypes} from "../../types/user";
import {Dispatch} from "redux";

export const fetchUsers = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({type: UserActionTypes.FETCH_USERS})
            fetch('https://jsonplaceholder.typicode.com/users/')
                .then(response => response.json())
                .then(json => dispatch({
                    type: UserActionTypes.FETCH_USERS_SUCCESS,
                    payload: json
                })).catch(e => dispatch({
                    type: UserActionTypes.FETCH_USERS_ERROR,
                payload: 'Произошла ошибка при загрузке пользователей'
                })
            )
        } catch (e) {
            dispatch({
                type: UserActionTypes.FETCH_USERS_ERROR,
                payload: 'Произошла ошибка при загрузке пользователей'
            })
        }
    }
}

export const Auth = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({type: UserActionTypes.FETCH_USER, payload: {
                    id: 4,
                    avatar: '',
                    name: '',
                    surname: '',
                    text: '',
                    age: 0
                }})
        } catch (e) {
            dispatch({
                type: UserActionTypes.FETCH_USERS_ERROR,
                payload: 'Произошла ошибка при авторизации'
            })
        }
    }
}
