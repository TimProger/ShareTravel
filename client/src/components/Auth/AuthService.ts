import $api, {API_URL} from "../../http/axios";
import {AxiosResponse} from "axios";
import {AuthResponse} from "../../types/httpTypes";

export default class AuthService {
    static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>(`${API_URL}/auth/login`, {email, password})
    }

    static async register(name: string, surname: string, email: string, password: string, passwordRepeat: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>(`${API_URL}/auth/register`, {name, surname, email, password, passwordRepeat})
    }

    static async logout(): Promise<void> {
        return $api.post(`${API_URL}/auth/logout`)
    }
}