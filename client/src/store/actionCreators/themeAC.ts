import { ThemeAction, ThemeActionTypes } from "../../types/themeType";
import { Dispatch } from "redux";

export const changeTheme = () => {
    return (dispatch: Dispatch<ThemeAction>) => {
        dispatch({ type: ThemeActionTypes.CHANGE_THEME })
    }
}

export const checkTheme = (theme: string) => {
    return (dispatch: Dispatch<ThemeAction>) => {
        dispatch({ type: ThemeActionTypes.CHANGE_THEME_TO, payload: theme })
        localStorage.setItem('theme', theme)
    }
}
