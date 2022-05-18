import {IUser} from "./userType";

export interface AuthResponse {
    token: string;
    user: IUser | any;
}


// Axios Get Interfaces

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