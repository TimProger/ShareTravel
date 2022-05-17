import {IUserResponse, UserAction, UserActionTypes} from "../../types/userType";
import {Dispatch} from "redux";
import axios, {AxiosResponse} from 'axios';

export const fetchUsers = (page: number = 1) => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({type: UserActionTypes.FETCH_USERS})
            axios.get<IUserResponse>(`https://randomuser.me/api/?page=${page}&results=40&seed=abc`)
                .then(response => {
                    // Response -> data -> data -> results
                    // Ответ -> объект от axios -> объект от api -> массив данных пользователей
                    const json1 = response.data.data.results.slice(0, response.data.data.results.length / 2)
                    const json2 = response.data.data.results.slice(response.data.data.results.length / 2, response.data.data.results.length)
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
            // fetch(`https://randomuser.me/api/?page=${page}&results=40&seed=abc`)
            //     .then(response => response.json())
            //     .then(json => {
            //         const json1 = json.results.slice(0, json.results.length / 2)
            //         const json2 = json.results.slice(json.results.length / 2, json.results.length)
            //         dispatch({
            //             type: UserActionTypes.FETCH_USERS_SUCCESS,
            //             payload: [json1, json2]
            //         });
            //     }).catch(e => {
            //         dispatch({
            //             type: UserActionTypes.FETCH_USERS_ERROR,
            //             payload: 'Произошла ошибка при запросе к серверу' + e
            //         })
            //     }
            // )
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
