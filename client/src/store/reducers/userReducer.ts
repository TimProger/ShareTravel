import {UserAction, UserActionTypes, IUserState} from "../../types/userType";

const initialState: IUserState = {
    users: [],
    loading: false,
    error: null
}

export const userReducer = (state: IUserState = initialState, action: UserAction): IUserState => {
    switch (action.type) {
        case UserActionTypes.FETCH_USERS:
            return {...state, loading: true, error: null, users: []}
        case UserActionTypes.DROP_USERS:
            return {...state,loading: true, error: null, users: []}
        case UserActionTypes.FETCH_USERS_SUCCESS:
            return {...state, loading: false, error: null, users: action.payload}
        case UserActionTypes.FETCH_USERS_ERROR:
            return {...state,loading: false, error: action.payload, users: []}
        default:
            return state
    }
}
