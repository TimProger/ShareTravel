import {combineReducers} from "redux";
import {userReducer} from "./userReducer";
import {postReducer} from "./postReducer";
import {ProfileReducer} from "./profileReducer";
import {AuthReducer} from "./authReducer";


export const rootReducer = combineReducers({
    auth: AuthReducer,
    user: userReducer,
    post: postReducer,
    profile: ProfileReducer,
})

export type RootState = ReturnType<typeof rootReducer>
