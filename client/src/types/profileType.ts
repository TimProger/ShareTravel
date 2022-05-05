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
    DROP_PROFILE = 'DROP_PROFILE',
    FETCH_PROFILE = 'FETCH_PROFILE',
    FETCH_PROFILE_ERROR = 'FETCH_PROFILE_ERROR',
    FETCH_PROFILE_SUCCESS = 'FETCH_PROFILE_SUCCESS',
}

interface IFETCH_PROFILE {
    type: ProfileActionTypes.FETCH_PROFILE;
}

interface IDROP_PROFILE {
    type: ProfileActionTypes.DROP_PROFILE;
}

interface IFETCH_PROFILE_ERROR {
    type: ProfileActionTypes.FETCH_PROFILE_ERROR;
    payload: string;
}

interface IFETCH_PROFILE_SUCCESS {
    type: ProfileActionTypes.FETCH_PROFILE_SUCCESS;
    payload: IProfile | any;
}

export type ProfileAction = IFETCH_PROFILE
    | IDROP_PROFILE
    | IFETCH_PROFILE_ERROR
    | IFETCH_PROFILE_SUCCESS


export interface IProfileProps {
    profile: IProfile | any;
    error: null | string;
    loading: boolean;
    fetchProfile: (id: string) => void;
    dropProfile: () => void;
    id: string;
}