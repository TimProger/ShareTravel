import {UserAction, UserActionTypes} from "../../types/userType";
import {IApiUsersResponseData} from "../../types/httpTypes";
import {Dispatch} from "redux";
import axios from 'axios';

export const fetchUsers = (page: number = 1) => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({type: UserActionTypes.FETCH_USERS})
            // Типы, которые мы задаём в дженерике относятся не к самому объекту ответа, а лишь к его полю data
            axios.get<IApiUsersResponseData>(`https://randomuser.me/api/?page=${page}&results=40&seed=abc`)
                .then(response => {
                    // Response -> data -> results
                    // Response -> data от axios -> results от api -> массив пользователей
                    response.data.results.forEach(el=>el.page=page)
                    const json1 = response.data.results.slice(0, response.data.results.length / 2)
                    const json2 = response.data.results.slice(response.data.results.length / 2, response.data.results.length)
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
