import {UserAction, UserActionTypes} from "../../types/userType";
import {Dispatch} from "redux";

export const fetchUsers = (page:number = 1, isFollowers:boolean) => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({type: UserActionTypes.FETCH_USERS})
            fetch(`https://randomuser.me/api/?page=${page}&results=40&seed=abc`)
                .then(response => response.json())
                .then(json => {
                    dispatch({
                        type: UserActionTypes.FETCH_USERS_SUCCESS,
                        payload: {follows:!isFollowers?json.results.filter((user:{[key: string]:any})=>user.registered.age%2===0||!(user.registered.age%5)):[], followers:isFollowers?json.results.filter((user:{[key: string]:any})=>user.registered.age%2===1||!(user.registered.age%5)):[]}
                    });console.log(json.results)
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
