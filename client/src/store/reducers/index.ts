import {combineReducers} from "redux";
import {userReducer} from "./userReducer";
import {postReducer} from "./postReducer";
import {ProfileReducer} from "./profileReducer";
import {AuthReducer} from "./authReducer";

export const rootReducer = combineReducers({
    auth: AuthReducer, // Страница авторизации
    user: userReducer, // Страница подписок
    post: postReducer, // Страница новостей
    profile: ProfileReducer, // Страница профиля
})

export type RootState = ReturnType<typeof rootReducer>
