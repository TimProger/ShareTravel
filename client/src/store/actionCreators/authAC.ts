import {AuthAction, AuthActionTypes, IAuthFormData} from "../../types/authType";
import {Dispatch} from "redux";
import AuthService from "../../components/Auth/AuthService";

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

// Получаю данные с формы, нахожу по ним пользователя и сохраняю токен в куку
export const login = (data: IAuthFormData) => {
    return async (dispatch: Dispatch<AuthAction>) => {
        try {
            dispatch({type: AuthActionTypes.AUTH_USER})
            setTimeout(()=> {
                const user = users.find(user=>user.email === data.email) || users[0]
                AuthService.login(data.email, data.password)
                localStorage.setItem('token', 'response.data.accessToken');
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

// Получаю данные с формы, нахожу по ним пользователя и сохраняю токен в куку
export const logout = () => {
    return async (dispatch: Dispatch<AuthAction>) => {
        try {
            dispatch({type: AuthActionTypes.AUTH_EXIT})
            localStorage.removeItem('token');
            // await AuthService.logout();
        } catch (e) {
            dispatch({
                type: AuthActionTypes.AUTH_USER_ERROR,
                payload: 'Произошла ошибка при выходе из аккаунта'
            })
        }
    }
}

// Проверяю наличие куки и если она есть, то ищу пользователя по данным в ней
export const checkAuth = () => {
    return async (dispatch: Dispatch<AuthAction>) => {
        dispatch({
            type: AuthActionTypes.AUTH_USER,
        })
        try {
            // const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {withCredentials: true})
            // console.log(response);
            localStorage.setItem('token', 'response.data.accessToken response.data.user');
            dispatch({
                type: AuthActionTypes.AUTH_USER_SUCCESS,
                payload: users[0]
            })
        } catch (e) {
            console.log(e);
        }
        // const email = getCookie('auth_token')
        // if(email){
        //     setTimeout(()=> {
        //         try {
        //             const user = users.find(user=>user.email === email) || users[0]
        //             dispatch({
        //                 type: AuthActionTypes.AUTH_USER_SUCCESS,
        //                 payload: user
        //             })
        //         } catch (e) {
        //             dispatch({
        //                 type: AuthActionTypes.AUTH_USER_ERROR,
        //                 payload: 'Произошла ошибка при поиске пользователя'
        //             })
        //         }
        //     }, 500)
        // }else{
        //     dispatch({
        //         type: AuthActionTypes.AUTH_USER_ERROR,
        //         payload: 'Произошла ошибка при поиске куки авторизации'
        //     })
        // }
    }
}