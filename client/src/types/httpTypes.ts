import {IUser} from "./userType";

export interface AuthResponse {
    accessToken: string;
    refreshToken: string;
    user: IUser | any;
}