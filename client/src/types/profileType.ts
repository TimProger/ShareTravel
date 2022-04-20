// Файл с типами профиля и экшенов связанных с ним

interface IProfile {
    id: number;
    avatar: string;
    name: string;
    surname: string;
    text: string;
    age: number;
}

interface IAuthProfile {
    id: number;
    avatar: string;
    name: string;
    surname: string;
    text: string;
    age: number;
}

export interface IProfileState {
    authProfile: IAuthProfile | null | any; // Убрать any после подключения бд
    profile: IProfile | null | any; // Убрать any после подключения бд
    isAuth: boolean;
    loading: boolean;
    error: null | string;
}

export enum ProfileActionTypes {
    FETCH_PROFILE = 'FETCH_PROFILE',
    FETCH_PROFILE_SUCCESS = 'FETCH_PROFILE_SUCCESS',
    FETCH_PROFILE_ERROR = 'FETCH_PROFILE_ERROR',
    AUTH_PROFILE = 'AUTH_PROFILE',
    AUTH_PROFILE_ERROR = 'AUTH_PROFILE_ERROR',
}

interface IFetchProfileAction {
    type: ProfileActionTypes.FETCH_PROFILE;
}

interface IFetchProfileSuccessAction {
    type: ProfileActionTypes.FETCH_PROFILE_SUCCESS;
    payload: IProfile | any // Убрать any после подключения бд
}

interface IFetchProfileErrorAction {
    type: ProfileActionTypes.FETCH_PROFILE_ERROR;
    payload: string;
}

interface IAUTH_PROFILE {
    type: ProfileActionTypes.AUTH_PROFILE;
}

interface IAUTH_PROFILE_ERROR {
    type: ProfileActionTypes.AUTH_PROFILE_ERROR;
    payload: string;
}

export type ProfileAction = IFetchProfileAction
    | IFetchProfileSuccessAction
    | IFetchProfileErrorAction
    | IAUTH_PROFILE
    | IAUTH_PROFILE_ERROR
