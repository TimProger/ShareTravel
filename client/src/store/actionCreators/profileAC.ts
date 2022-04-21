import {ProfileAction, ProfileActionTypes, IAuthFormData} from "../../types/profileType";
import {Dispatch} from "redux";

export const fetchProfile = (id: any) => {
    return async (dispatch: Dispatch<ProfileAction>) => {
        try {
            // fetch('https://jsonplaceholder.typicode.com/users/' + id)
            //     .then(response => response.json())
            //     .then(json => dispatch({
            //         type: ProfileActionTypes.AUTH_PROFILE_SUCCESS,
            //         payload: json
            //     })).catch(e => dispatch({
            //         type: ProfileActionTypes.AUTH_PROFILE_ERROR,
            //         payload: 'Произошла ошибка при поиске профиля: ' + e
            //     })
            // )
            dispatch({type: ProfileActionTypes.FETCH_PROFILE})
            setTimeout(()=> {
                const users = [
                    {
                        id: 0,
                        avatar: 'https://i.ytimg.com/vi/LmWQd8zhEg4/maxresdefault.jpg',
                        name: 'Tim',
                        surname: 'Timmsky',
                        text: 'What a good network',
                        email: '1email1@mail.ru',
                        age: 23
                    },
                    {
                        id: 1,
                        avatar: 'https://i.ytimg.com/vi/LmWQd8zhEg4/maxresdefault.jpg',
                        name: 'Bob',
                        surname: 'Luminsky',
                        text: 'Yo dudes',
                        email: '2email2@mail.ru',
                        age: 51
                    },
                    {
                        id: 2,
                        avatar: 'https://i.ytimg.com/vi/LmWQd8zhEg4/maxresdefault.jpg',
                        name: 'Steven',
                        surname: 'Armstrong',
                        text: 'Nice knife, Jack.',
                        email: '3email3@mail.ru',
                        age: 42
                    }
                ]
                const user = users.find(user=>user.id === +id)
                dispatch({
                    type: ProfileActionTypes.FETCH_PROFILE_SUCCESS,
                    payload: user
                })
            }, 10)

        } catch (e) {
            dispatch({
                type: ProfileActionTypes.FETCH_PROFILE_ERROR,
                payload: 'Произошла ошибка при поиске профиля'
            })
        }
    }
}

export const formAuth = (data: IAuthFormData) => {
    return async (dispatch: Dispatch<ProfileAction>) => {
        try {
            dispatch({type: ProfileActionTypes.AUTH_USER})
            setTimeout(()=> {
                const users = [
                    {
                        id: 0,
                        avatar: 'https://i.ytimg.com/vi/LmWQd8zhEg4/maxresdefault.jpg',
                        name: 'Tim',
                        surname: 'Timmsky',
                        text: 'What a good network',
                        email: '1email1@mail.ru',
                        age: 23
                    },
                    {
                        id: 1,
                        avatar: 'https://i.ytimg.com/vi/LmWQd8zhEg4/maxresdefault.jpg',
                        name: 'Bob',
                        surname: 'Luminsky',
                        text: 'Yo dudes',
                        email: '2email2@mail.ru',
                        age: 51
                    },
                    {
                        id: 2,
                        avatar: 'https://i.ytimg.com/vi/LmWQd8zhEg4/maxresdefault.jpg',
                        name: 'Steven',
                        surname: 'Armstrong',
                        text: 'Nice knife, Jack.',
                        email: '3email3@mail.ru',
                        age: 42
                    }
                ]
                const user = users.find(user=>user.email === data.email)
                dispatch({
                    type: ProfileActionTypes.AUTH_USER_SUCCESS,
                    payload: user
                })
            }, 500)

        } catch (e) {
            dispatch({
                type: ProfileActionTypes.AUTH_USER_ERROR,
                payload: 'Произошла ошибка при авторизации'
            })
        }
    }
}