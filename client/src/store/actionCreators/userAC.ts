import {UserAction, UserActionTypes} from "../../types/userType";
import {Dispatch} from "redux";

export const fetchUsers = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({type: UserActionTypes.FETCH_USERS})
            fetch('https://randomuser.me/api/?page=3&results=20&seed=abc')
                .then(response => response.json())
                .then(json => {
                    dispatch({
                        type: UserActionTypes.FETCH_USERS_SUCCESS,
                        // payload: [json.filter((user:{[key: string]:any})=>user.id%2===0||!(user.id%5)), json.filter((user:{[key: string]:any})=>user.id%2===1||!(user.id%5))]
                        payload: [json.results.filter((user:{[key: string]:any})=>user.registered.age%2===0||!(user.registered.age%5)), json.results.filter((user:{[key: string]:any})=>user.registered.age%2===1||!(user.registered.age%5))]
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
