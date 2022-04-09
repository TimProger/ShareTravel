import {UserAction, UserActionTypes, IUserState} from "../../types/user";

const initialState: IUserState = {
    user: {
        id: 5,
        avatar: 'https://yt3.ggpht.com/ytc/AKedOLSRSl8xsTNuQU_f6sg3bHI19gZYUSqLu2I78S90MQ=s88-c-k-c0x00ffffff-no-rj',
        name: 'Chelsey',
        surname: 'Dietrich',
        text: 'Секрет успеха прост. Умение сделать что-либо заключается в вере, что вы можете это сделать. Что-либо, во что вы верите достаточно сильно, вы можете сделать. Что угодно. Пока вы в это верите.',
        age: 69
    },
    users: [],
    loading: false,
    error: null
}

export const userReducer = (state: IUserState = initialState, action: UserAction): IUserState => {
    switch (action.type) {
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