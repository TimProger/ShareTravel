import {UserAction, UserActionTypes} from "../../types/userType";
import {Dispatch} from "redux";

export const fetchUsers = (page: number = 1) => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({type: UserActionTypes.FETCH_USERS})
            fetch(`https://randomuser.me/api/?page=${page}&results=40&seed=abc`)
                .then(response => response.json())
                .then(json => {
                    const json1 = json.results.slice(0, json.results.length / 2)
                    const json2 = json.results.slice(json.results.length / 2, json.results.length)
                    dispatch({
                        type: UserActionTypes.FETCH_USERS_SUCCESS,
                        payload: [json1, json2]
                    });
                }).catch(e => {
                    dispatch({
                        type: UserActionTypes.FETCH_USERS_ERROR,
                        payload: 'Произошла ошибка при запросе к серверу' + e
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
