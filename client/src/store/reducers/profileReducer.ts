import {ProfileAction, ProfileActionTypes, IProfileState} from "../../types/profileType";

const initialState: IProfileState = {
    profile: null, // Профиль пользователя (Для страницы пользователя (Любого))
    loading: true,
    error: null
}

export const ProfileReducer = (state: IProfileState = initialState, action: ProfileAction): IProfileState => {
    switch (action.type) {
        case ProfileActionTypes.FETCH_PROFILE:
            return {...state, loading: true, error: null}
        case ProfileActionTypes.DROP_PROFILE:
            return {profile: null, loading: true, error: null}
        case ProfileActionTypes.FETCH_PROFILE_ERROR:
            return {...state, loading: false, error: action.payload, profile: null}
        case ProfileActionTypes.FETCH_PROFILE_SUCCESS:
            return {...state, loading: false, error: null, profile: action.payload}
        default:
            return state
    }
}
