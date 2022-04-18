interface IUser {
    id: number;
    avatar: string;
    name: string;
    surname: string;
    text: string;
    age: number;
}

export interface IUserState {
    user: IUser;
    users: any[];
    loading: boolean;
    error: null | string;
}

export enum UserActionTypes {
    FETCH_USER = 'FETCH_USER',
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
    FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
}

interface IFetchUserAction {
    type: UserActionTypes.FETCH_USER;
    payload: IUser
}

interface IFetchUsersAction {
    type: UserActionTypes.FETCH_USERS;
}

interface IFetchUsersSuccessAction {
    type: UserActionTypes.FETCH_USERS_SUCCESS;
    payload: any[]
}

interface IFetchUsersErrorAction {
    type: UserActionTypes.FETCH_USERS_ERROR;
    payload: string;
}

export type UserAction = IFetchUserAction | IFetchUsersAction | IFetchUsersErrorAction | IFetchUsersSuccessAction
