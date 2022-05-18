// Файл с типами темы и экшенов связанных с ними

export interface IThemeState {
    theme: string;
    loading: boolean;
    error: null | string;
}

export enum ThemeActionTypes {
    CHANGE_THEME = 'CHANGE_THEME',
    CHANGE_THEME_TO = 'CHANGE_THEME_TO',
}

interface ICHANGE_THEME_TO {
    type: ThemeActionTypes.CHANGE_THEME_TO;
    payload: string
}

interface ICHANGE_THEME {
    type: ThemeActionTypes.CHANGE_THEME;
}

export type ThemeAction = ICHANGE_THEME_TO
    | ICHANGE_THEME