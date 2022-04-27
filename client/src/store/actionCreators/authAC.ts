import {AuthAction, AuthActionTypes, IAuthFormData} from "../../types/authType";
import {Dispatch} from "redux";
import {getCookie, setCookie} from "../../utils/cookies";

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

export const formAuth = (data: IAuthFormData) => {
    return async (dispatch: Dispatch<AuthAction>) => {
        try {
            dispatch({type: AuthActionTypes.AUTH_USER})
            setTimeout(()=> {
                const user = users.find(user=>user.email === data.email) || users[0]
                setCookie('auth_token', user.email, {secure: true, 'max-age': 3600});
                dispatch({
                    type: AuthActionTypes.AUTH_USER_SUCCESS,
                    payload: user
                })
            }, 500)

        } catch (e) {
            dispatch({
                type: AuthActionTypes.AUTH_USER_ERROR,
                payload: 'Произошла ошибка при авторизации'
            })
        }
    }
}

export const checkCookie = () => {
    return async (dispatch: Dispatch<AuthAction>) => {
        setTimeout(()=> {
            const email = getCookie('auth_token')
            if(email){
                try {
                    dispatch({
                        type: AuthActionTypes.AUTH_USER,
                    })
                    const user = users.find(user=>user.email === email) || users[0]
                    dispatch({
                        type: AuthActionTypes.AUTH_USER_SUCCESS,
                        payload: user
                    })
                } catch (e) {
                    dispatch({
                        type: AuthActionTypes.AUTH_USER_ERROR,
                        payload: 'Произошла ошибка при поиске пользователя'
                    })
                }
            }
        }, 500)
    }
}