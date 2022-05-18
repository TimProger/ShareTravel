import {ThemeAction, ThemeActionTypes, IThemeState} from "../../types/themeType";

const initialState: IThemeState = {
    theme: 'light',
    loading: true, // Ни в коем случае не переводить в false.
    error: null,
}

export const ThemeReducer = (state: IThemeState = initialState, action: ThemeAction): IThemeState => {
    switch (action.type) {
        case ThemeActionTypes.CHANGE_THEME:
            return {...state, theme: state.theme === 'light' ? 'dark' : 'light'}
        case ThemeActionTypes.CHANGE_THEME_TO:
            return {...state, theme: action.payload}
        default:
            return state
    }
}
