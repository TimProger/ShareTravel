import {AuthAction, AuthActionTypes, IAuthFormData} from "../../types/authType";
import {Dispatch} from "redux";

export const formAuth = (data: IAuthFormData) => {
    return async (dispatch: Dispatch<AuthAction>) => {
        try {
            dispatch({type: AuthActionTypes.AUTH_USER})
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