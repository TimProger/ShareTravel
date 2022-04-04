import {UserAction, UserActionTypes, IUserState} from "../../types/user";

const initialState: IUserState = {
    user: {
        id: 0,
        avatar: '',
        name: 'Tommy',
        surname: 'Bonny',
        text: 'Just a user',
        age: 18
    },
    users: [],
    loading: false,
    error: null
}

export const userReducer = (state: IUserState = initialState, action: UserAction): IUserState => {
    switch (action.type) {
        case UserActionTypes.FETCH_USER:
            return {...state, user: action.payload}
        case UserActionTypes.FETCH_USERS:
            return {...state, loading: true, error: null, users: []}
        case UserActionTypes.FETCH_USERS_SUCCESS:
            return {...state, loading: false, error: null, users: action.payload}
        case UserActionTypes.FETCH_USERS_ERROR:
            return {...state, loading: false, error: action.payload, users: []}
        default:
            return state
    }
}
