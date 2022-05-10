// Файл с типами пользователей и экшенов связанных с ними

export interface IUser {
    id: number;
    avatar: string;
    name: string;
    surname: string;
    text: string;
    age: number;
}

export interface IUserState {
    follows: IUser[] | any[];
    followers: IUser[] | [];
    loading: boolean;
    error: null | string
}

export enum UserActionTypes {
    FETCH_USER = 'FETCH_USER',
    DROP_USERS = 'DROP_USERS',
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

interface IDropUsersAction {
    type: UserActionTypes.DROP_USERS;
}

interface IFetchUsersSuccessAction {
    type: UserActionTypes.FETCH_USERS_SUCCESS;
    payload: {[key:string]:any}
}

interface IFetchUsersErrorAction {
    type: UserActionTypes.FETCH_USERS_ERROR;
    payload: string;
}

export type UserAction = IDropUsersAction
    | IFetchUserAction
    | IFetchUsersAction
    | IFetchUsersErrorAction
    | IFetchUsersSuccessAction


export interface IUsersProps {
    fetchUsers: (id:number) => void;
    dropUsers: () => void;
    follows: IUser[] | any[];
    followers: IUser[] | any[];
    error: null | string;
    loading: boolean;
}

export interface IUserProps {
    user: IUser | any;
    followed?: boolean;
}