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
    profile: IProfile | null | any; // Убрать any после подключения бд
    loading: boolean;
    error: null | string;
}

export enum ProfileActionTypes {
    FETCH_PROFILE = 'FETCH_PROFILE',
    FETCH_PROFILE_ERROR = 'FETCH_PROFILE_ERROR',
    FETCH_PROFILE_SUCCESS = 'FETCH_PROFILE_SUCCESS',
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

export type ProfileAction = FETCH_PROFILE
    | FETCH_PROFILE_ERROR
    | FETCH_PROFILE_SUCCESS
