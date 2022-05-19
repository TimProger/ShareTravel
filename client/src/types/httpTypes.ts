import {IUser} from "./userType";

export interface AuthResponse {
    user: IUser | any;
    token: string;
    msg?: string
}

// Api Get Users
interface IApiUsersResponseDataInfo{
    page: number;
    results: number;
    seed: string;
    version: string;
}

export interface IApiUsersResponseData{
    info: IApiUsersResponseDataInfo;
    results: IUser[] | any[];
}