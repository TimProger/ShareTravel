import {ProfileAction, ProfileActionTypes, IProfileState} from "../../types/profile";

const initialState: IProfileState = {
    profile: null,
    loading: false,
    error: null
}

export const ProfileReducer = (state: IProfileState = initialState, action: ProfileAction): IProfileState => {
    switch (action.type) {
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
