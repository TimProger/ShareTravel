import $api, {API_URL} from "../../http/axios";
import {AxiosResponse} from "axios";
import {AuthResponse} from "../../types/httpTypes";

async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *client
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return await response.json(); // parses JSON response into native JavaScript objects
}

export default class AuthService {
    static async login(email: string, password: string): Promise<AuthResponse> {
        // return $api.post<AuthResponse>(`${API_URL}/api/v1/auth/login`, {email, password})
        return postData(`${API_URL}/auth/login`, {email, password})
    }

    static async register(name: string, surname: string, email: string, password: string, passwordRepeat: string, avatar: string): Promise<AuthResponse> {
        // return $api.post<AuthResponse>(`${API_URL}/auth/register`, {name, surname, email, password, passwordRepeat})
        return postData(`${API_URL}/auth/register`, {name, surname, email, password, passwordRepeat, avatar})
    }

    static async logout(): Promise<void> {
        return $api.post(`${API_URL}/auth/logout`)
    }
}