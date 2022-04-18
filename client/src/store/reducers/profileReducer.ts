import {ProfileAction, ProfileActionTypes, IProfileState} from "../../types/profileType";

const initialState: IProfileState = {
    authProfile: null,
    profile: null,
    isAuth: false,
    loading: false,
    error: null
}

export const ProfileReducer = (state: IProfileState = initialState, action: ProfileAction): IProfileState => {
    switch (action.type) {
        case ProfileActionTypes.AUTH_PROFILE:
            return {...state, loading: false, error: null, isAuth: true}
        case ProfileActionTypes.AUTH_PROFILE_ERROR:
            return {...state, loading: false, error: action.payload, profile: null, isAuth: false}
        case ProfileActionTypes.FETCH_PROFILE:
            return {...state, loading: true, error: null, profile: null}
        case ProfileActionTypes.FETCH_PROFILE_SUCCESS:
            return {...state, loading: false, error: null, profile: action.payload}
        case ProfileActionTypes.FETCH_PROFILE_ERROR:
            return {...state, loading: false, error: action.payload, profile: null}
        default:
            return state
    }
}