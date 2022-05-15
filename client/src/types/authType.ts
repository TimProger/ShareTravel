// Файл с типами профиля и экшенов связанных с ним

interface IAuth {
    id: number;
    avatar: string;
    name: string;
    surname: string;
    text: string;
    email: string;
    age: number;
}

export interface IAuthState {
    user: IAuth | null | any; // Убрать any после подключения бд
    isAuth: boolean;
    loading: boolean;
    error: null | string;
}

export interface IAuthFormData {
    email: string;
    password: string;
}

export enum AuthActionTypes {
    AUTH_USER = 'AUTH_PROFILE',
    AUTH_USER_ERROR = 'AUTH_PROFILE_ERROR',
    AUTH_USER_SUCCESS = 'AUTH_PROFILE_SUCCESS',
    AUTH_EXIT='AUTH_EXIT'
}

interface IAUTH_USER {
    type: AuthActionTypes.AUTH_USER;
}

interface IAUTH_EXIT {
    type: AuthActionTypes.AUTH_EXIT;
}

interface IAUTH_USER_ERROR {
    type: AuthActionTypes.AUTH_USER_ERROR;
    payload: string;
}

interface IAUTH_USER_SUCCESS {
    type: AuthActionTypes.AUTH_USER_SUCCESS;
    payload: IAuth | any;
}

export type AuthAction = IAUTH_USER
    | IAUTH_USER_ERROR
    | IAUTH_USER_SUCCESS
    | IAUTH_EXIT
