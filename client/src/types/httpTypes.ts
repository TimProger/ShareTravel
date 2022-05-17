import {IUser} from "./userType";

export interface AuthResponse {
    accessToken: string;
    refreshToken: string;
    user: IUser | any;
}


// Axios Get Interfaces

interface IAxiosResponseHeaders{
    'cache-control': string;
    'content-type': string;
}

interface IApiResponseDataInfo{
    page: number;
    results: number;
    seed: string;
    version: string;
}

interface IApiResponseData<T=any>{
    results: T;
    info: IApiResponseDataInfo;
}

export interface IAxiosResponse<T=any> {
    data: IApiResponseData<T>;
    headers: IAxiosResponseHeaders;
    request: XMLHttpRequest;
    status: number;
    statusText: string;
}