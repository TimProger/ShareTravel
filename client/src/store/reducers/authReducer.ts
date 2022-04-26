import {AuthAction, AuthActionTypes, IAuthState} from "../../types/authType";

const initialState: IAuthState = {
    user: null, // Объект авторизованного пользователя
    loading: false,
    error: null,
    isAuth: false,
}

export const AuthReducer = (state: IAuthState = initialState, action: AuthAction): IAuthState => {
    switch (action.type) {
        case AuthActionTypes.AUTH_USER:
            return {...state, loading: true, error: null, isAuth: false}
        case AuthActionTypes.AUTH_USER_ERROR:
            return {...state, loading: false, error: action.payload, user: null, isAuth: false}
        case AuthActionTypes.AUTH_USER_SUCCESS:
            return {...state, loading: false, error: null, user: action.payload, isAuth: true}
        default:
            return state
    }
}
