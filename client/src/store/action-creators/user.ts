import {UserAction, UserActionTypes} from "../../types/user";
import {Dispatch} from "redux";

export const fetchUsers = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({type: UserActionTypes.FETCH_USERS})
            dispatch({
                type: UserActionTypes.FETCH_USERS_SUCCESS,
                payload: [
                    {
                        id: 1,
                        avatar: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
                        name: 'Tim',
                        surname: 'Timmsky',
                        text: 'I do love pancakes.',
                        age: 16,
                        subscribed: false
                    },
                    {
                        id: 2,
                        avatar: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
                        name: 'Bob',
                        surname: 'Luminsky',
                        text: 'Trying to find his sister.',
                        age: 17,
                        subscribed: true
                    },
                    {
                        id: 3,
                        avatar: 'https://www.meme-arsenal.com/memes/c0220207c25e98f991d6f79e4e98c14e.jpg',
                        name: 'Steven',
                        surname: 'Armstrong',
                        text: 'Armstrong sucks.',
                        age: 17,
                        subscribed: true
                    }
                ]
            })
        } catch (e) {
            dispatch({
                type: UserActionTypes.FETCH_USERS_ERROR,
                payload: 'Произошла ошибка при загрузке пользователей'
            })
        }
    }
}

export const Auth = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({type: UserActionTypes.FETCH_USER, payload: {
                    id: 4,
                    avatar: '',
                    name: '',
                    surname: '',
                    text: '',
                    age: 0
                }})
        } catch (e) {
            dispatch({
                type: UserActionTypes.FETCH_USERS_ERROR,
                payload: 'Произошла ошибка при авторизации'
            })
        }
    }
}
