import {AuthAction, AuthActionTypes, IAuthFormData, IRegisterFormData} from "../../types/authType";
import {Dispatch} from "redux";
import AuthService from "../../components/Auth/AuthService";

// Получаю данные с формы, нахожу по ним пользователя и сохраняю токен в куку
export const login = (data: IAuthFormData) => {
    return async (dispatch: Dispatch<AuthAction>) => {
        try {
            dispatch({type: AuthActionTypes.AUTH_USER})
            const response = await AuthService.login(data.email, data.password)
            localStorage.setItem('token', response.token);
            dispatch({
                type: AuthActionTypes.AUTH_USER_SUCCESS,
                payload: response.user
            })
        } catch (e) {
            dispatch({
                type: AuthActionTypes.AUTH_USER_ERROR,
                payload: 'Произошла ошибка при авторизации'
            })
        }
    }
}

// Получаю данные с формы, нахожу по ним пользователя и сохраняю токен в куку
export const register = (data: IRegisterFormData) => {
    return async (dispatch: Dispatch<AuthAction>) => {
        try {
            dispatch({type: AuthActionTypes.AUTH_USER})
            const response = await AuthService.register(data.name, data.surname, data.email, data.password, data.passwordRepeat)
            if(response.msg){
                dispatch({
                    type: AuthActionTypes.AUTH_USER_ERROR,
                    payload: 'Произошла ошибка при авторизации: ' + response.msg
                })
                return
            }
            console.log(response)
            localStorage.setItem('token', response.token);
            dispatch({
                type: AuthActionTypes.AUTH_USER_SUCCESS,
                payload: response.user
            })
        } catch (e) {
            dispatch({
                type: AuthActionTypes.AUTH_USER_ERROR,
                payload: 'Произошла ошибка при авторизации: ' + e
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
            const token = localStorage.getItem('token') || '';
            const response = await AuthService.getUserByToken(token)
            if(response.user && response.token){
                dispatch({
                    type: AuthActionTypes.AUTH_USER_SUCCESS,
                    payload: response.user
                })
                localStorage.setItem('token', response.token);
            }else{
                dispatch({
                    type: AuthActionTypes.AUTH_USER_ERROR,
                    payload: 'Произошла ошибка при поиске аккаунта'
                })
            }
        } catch (e) {
            dispatch({
                type: AuthActionTypes.AUTH_USER_ERROR,
                payload: 'Произошла ошибка при поиске аккаунта'
            })
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