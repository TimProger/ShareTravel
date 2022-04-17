import {ProfileAction, ProfileActionTypes} from "../../types/profile";
import {Dispatch} from "redux";

export const fetchProfile = (id: number) => {
    return async (dispatch: Dispatch<ProfileAction>) => {
        try {
            dispatch({type: ProfileActionTypes.FETCH_PROFILE})
            fetch('https://jsonplaceholder.typicode.com/users/' + id)
                .then(response => response.json())
                .then(json => dispatch({
                    type: ProfileActionTypes.FETCH_PROFILE_SUCCESS,
                    payload: json
                })).catch(e => dispatch({
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

export const authProfile = (id: number) => {
    return async (dispatch: Dispatch<ProfileAction>) => {
        try {
            dispatch({type: ProfileActionTypes.AUTH_PROFILE})

        } catch (e) {
            dispatch({
                type: ProfileActionTypes.AUTH_PROFILE_ERROR,
                payload: 'Произошла ошибка при авторизации'
            })
        }
    }
}