import {API_URL} from "../../http/axios";
import {AuthResponse} from "../../types/httpTypes";
import {postData} from "../../http/fetch";

export default class AuthService {
    static async login(email: string, password: string): Promise<AuthResponse> {
        // return $api.post<AuthResponse>(`${API_URL}/api/v1/auth/login`, {email, password})
        return postData(`${API_URL}/auth/login`, {email, password})
    }

    static async register(name: string, surname: string, email: string, password: string, passwordRepeat: string): Promise<AuthResponse> {
        // return $api.post<AuthResponse>(`${API_URL}/auth/register`, {name, surname, email, password, passwordRepeat})
        return postData(`${API_URL}/auth/register`, {name, surname, email, password, passwordRepeat})
    }

    static async logout(): Promise<void> {
        return postData(`${API_URL}/auth/logout`)
    }

    static async getUserByToken(token: string): Promise<AuthResponse>{
        return postData(`${API_URL}/auth/token`, {token})
    }
}