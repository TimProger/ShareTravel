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
            // setTimeout(()=> {
            //     const users = [
            //         {
            //             id: 0,
            //             avatar: 'https://i.ytimg.com/vi/LmWQd8zhEg4/maxresdefault.jpg',
            //             name: 'Tim',
            //             surname: 'Timmsky',
            //             text: 'What a good network',
            //             email: '1email1@mail.ru',
            //             age: 23
            //         },
            //         {
            //             id: 1,
            //             avatar: 'https://i.ytimg.com/vi/LmWQd8zhEg4/maxresdefault.jpg',
            //             name: 'Bob',
            //             surname: 'Luminsky',
            //             text: 'Yo dudes',
            //             email: '2email2@mail.ru',
            //             age: 51
            //         },
            //         {
            //             id: 2,
            //             avatar: 'https://i.ytimg.com/vi/LmWQd8zhEg4/maxresdefault.jpg',
            //             name: 'Steven',
            //             surname: 'Armstrong',
            //             text: 'Nice knife, Jack.',
            //             email: '3email3@mail.ru',
            //             age: 42
            //         }
            //     ]
            //     const user = users.find(user=>user.id === +id)
            //     dispatch({
            //         type: ProfileActionTypes.FETCH_PROFILE_SUCCESS,
            //         payload: user
            //     })
            // }, 10)

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