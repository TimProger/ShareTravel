import {UserAction, UserActionTypes} from "../../types/userType";
import {Dispatch} from "redux";

export const fetchUsers = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({type: UserActionTypes.FETCH_USERS})
            fetch('https://jsonplaceholder.typicode.com/users/')
                .then(response => response.json())
                .then(json => {
                    dispatch({
                        type: UserActionTypes.FETCH_USERS_SUCCESS,
                        payload: json
                    })
                }).catch(e => {
                    dispatch({
                        type: UserActionTypes.FETCH_USERS_ERROR,
                        payload: 'Произошла ошибка при запросе к серверу'
                    })
                }
            )
        } catch (e) {
            dispatch({
                type: UserActionTypes.FETCH_USERS_ERROR,
                payload: 'Произошла ошибка при загрузке пользователей'
            })
        }
    }
}

export const dropUsers = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        dispatch({type: UserActionTypes.DROP_USERS})
    }
}
