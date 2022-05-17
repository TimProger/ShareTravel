import {IUser} from "./userType";

export interface AuthResponse {
    accessToken: string;
    refreshToken: string;
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

export interface IApiUsersResponseData<T=any>{
    info: IApiUsersResponseDataInfo;
    results: IUser[];
}