import {UserAction, UserActionTypes, IUserState} from "../../types/userType";

const initialState: IUserState = {
    follows:[],
    followers:[],
    loading: true, // Ни в коем случае не переводить в false.
    error: null
}

export const userReducer = (state: IUserState = initialState, action: UserAction): IUserState => {
    switch (action.type) {
        case UserActionTypes.FETCH_USERS:
            return {...state, loading: true, error: null}
        case UserActionTypes.DROP_USERS:
            return {...state,loading: true, error: null, follows:[], followers:[]}
        case UserActionTypes.FETCH_USERS_SUCCESS:
            return {...state, loading: false, error: null, follows:[...state.follows, ...action.payload[0]], followers:[...state.followers, ...action.payload[1]]}
        case UserActionTypes.FETCH_USERS_ERROR:
            return {...state,loading: false, error: action.payload, follows:[], followers:[]}
        default:
            return state
    }
}
