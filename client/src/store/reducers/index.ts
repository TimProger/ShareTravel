import {combineReducers} from "redux";
import {userReducer} from "./userReducer";
import {postReducer} from "./postReducer";
import {ProfileReducer} from "./profileReducer";


export const rootReducer = combineReducers({
    user: userReducer,
    post: postReducer,
    profile: ProfileReducer
})

export type RootState = ReturnType<typeof rootReducer>
