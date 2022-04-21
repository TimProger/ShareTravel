// Файл с типами профиля и экшенов связанных с ним
interface IProfile {
    id: number;
    avatar: string;
    name: string;
    surname: string;
    text: string;
    email: string;
    age: number;
}

export interface IProfileState {
    user: IProfile | null | any; // Убрать any после подключения бд
    profile: IProfile | null | any; // Убрать any после подключения бд
    isAuth: boolean;
    loading: boolean;
    error: null | string;
}

export interface IAuthFormData {
    email: string;
    password: string;
}

export enum ProfileActionTypes {
    AUTH_USER = 'AUTH_PROFILE',
    AUTH_USER_ERROR = 'AUTH_PROFILE_ERROR',
    AUTH_USER_SUCCESS = 'AUTH_PROFILE_SUCCESS',
    FETCH_PROFILE = 'FETCH_PROFILE',
    FETCH_PROFILE_ERROR = 'FETCH_PROFILE_ERROR',
    FETCH_PROFILE_SUCCESS = 'FETCH_PROFILE_SUCCESS',
}

interface IAUTH_USER {
    type: ProfileActionTypes.AUTH_USER;
}

interface IAUTH_USER_ERROR {
    type: ProfileActionTypes.AUTH_USER_ERROR;
    payload: string;
}

interface IAUTH_USER_SUCCESS {
    type: ProfileActionTypes.AUTH_USER_SUCCESS;
    payload: IProfile | any;
}

interface FETCH_PROFILE {
    type: ProfileActionTypes.FETCH_PROFILE;
}

interface FETCH_PROFILE_ERROR {
    type: ProfileActionTypes.FETCH_PROFILE_ERROR;
    payload: string;
}

interface FETCH_PROFILE_SUCCESS {
    type: ProfileActionTypes.FETCH_PROFILE_SUCCESS;
    payload: IProfile | any;
}

export type ProfileAction = IAUTH_USER
    | IAUTH_USER_ERROR
    | IAUTH_USER_SUCCESS
    | FETCH_PROFILE
    | FETCH_PROFILE_ERROR
    | FETCH_PROFILE_SUCCESS
