import {ProfileAction, ProfileActionTypes, IProfileState} from "../../types/profileType";

const initialState: IProfileState = {
    user: null, // Объект авторизованного пользователя
    profile: null, // Профиль пользователя (Для страницы пользователя (Любого))
    loading: false,
    error: null,
    isAuth: false,
}

export const ProfileReducer = (state: IProfileState = initialState, action: ProfileAction): IProfileState => {
    switch (action.type) {
        case ProfileActionTypes.AUTH_USER:
            return {...state, loading: true, error: null, isAuth: false}
        case ProfileActionTypes.AUTH_USER_ERROR:
            return {...state, loading: false, error: action.payload, user: null, isAuth: false}
        case ProfileActionTypes.AUTH_USER_SUCCESS:
            return {...state, loading: false, error: null, user: action.payload, isAuth: true}
        case ProfileActionTypes.FETCH_PROFILE:
            return {...state, loading: true, error: null}
        case ProfileActionTypes.FETCH_PROFILE_ERROR:
            return {...state, loading: false, error: action.payload, profile: null}
        case ProfileActionTypes.FETCH_PROFILE_SUCCESS:
            return {...state, loading: false, error: null, profile: action.payload}
        default:
            return state
    }
}