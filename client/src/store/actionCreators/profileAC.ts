import {ProfileAction, ProfileActionTypes} from "../../types/profileType";
import {IApiUsersResponseData} from "../../types/httpTypes";
import {Dispatch} from "redux";
import axios from 'axios';

export const fetchProfile = (id: string, page:number=1) => {
    return async (dispatch: Dispatch<ProfileAction>) => {
        try {
            dispatch({type: ProfileActionTypes.FETCH_PROFILE})
            axios.get<IApiUsersResponseData>(`https://randomuser.me/api/?page=${page}&results=40&seed=abc`)
                .then(response => {
                    const json = response.data.results.filter((el:any)=>el.login.uuid===id)[0]
                    dispatch({
                        type: ProfileActionTypes.FETCH_PROFILE_SUCCESS,
                        payload: json
                    })
                }).catch(e => dispatch({
                    type: ProfileActionTypes.FETCH_PROFILE_ERROR,
                    payload: 'Произошла ошибка при поиске профиля: ' + e
                })
            )
        } catch (e) {
            dispatch({
                type: ProfileActionTypes.FETCH_PROFILE_ERROR,
                payload: 'Произошла ошибка при поиске профиля'
            })
        }
    }
}

export const dropProfile = () => {
    return async (dispatch: Dispatch<ProfileAction>) => {
        dispatch({type: ProfileActionTypes.DROP_PROFILE})
    }
}