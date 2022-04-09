interface IProfile {
    id: number;
    avatar: string;
    name: string;
    surname: string;
    text: string;
    age: number;
}

export interface IProfileState {
    profile: IProfile | null | any; // Убрать any после подключения бд
    loading: boolean;
    error: null | string;
}

export enum ProfileActionTypes {
    FETCH_PROFILE = 'FETCH_PROFILE',
    FETCH_PROFILE_SUCCESS = 'FETCH_PROFILE_SUCCESS',
    FETCH_PROFILE_ERROR = 'FETCH_PROFILE_ERROR',
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

export type ProfileAction = IFetchProfileAction | IFetchProfileSuccessAction | IFetchProfileErrorAction
