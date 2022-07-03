import React, { useEffect } from "react"
import './App.css';
import { useTypedSelector } from "./hooks/useTypedSelector";
import AuthPage from "./components/pages/Auth/AuthPage";
import MainPage from "./components/pages/Main/MainPage";
import PageLoading from "./components/Loadings/Page/PageLoading";
import { useActions } from "./hooks/useActions";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";

function App() {
    // Получение куки для аутентификации
    const { checkAuth, checkTheme, changeTheme } = useActions()

    // Проверяю наличие куки и если она есть, то ищу пользователя по данным в ней
    useEffect(() => {
        debugger;
        let theme = localStorage.getItem('theme')
        if (!theme) {
            let isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
            isDark ? theme = 'dark' : theme = 'light'
        }
        if (theme === 'light' || theme === 'dark') {
            checkTheme(theme)
        }
        if (localStorage.getItem('token')) {
            checkAuth()
        }
    }, [])

    const { isAuth, loading } = useTypedSelector(state => state.auth)

    // Получение темы
    const { theme } = useTypedSelector(state => state.theme)

    if (loading) {
        return (
            <PageLoading />
        )
    }

    return (
        <>
            <div
                className={theme === 'light' ? 'changeTheme changeThemeLight' : 'changeTheme changeThemeDark'}
                onClick={() => {
                    changeTheme()
                    localStorage.setItem('theme', theme === 'light' ? 'dark' : 'light')
                }}>
                {theme === 'light' ?
                    <IoMoonOutline className={'icons theme-btn'} />
                    :
                    <IoSunnyOutline className={'icons theme-btn'} />
                }
            </div>

            {/* Проверка авторизации */}
            {isAuth ? <MainPage theme={theme} /> : <AuthPage theme={theme} />}
        </>
    )
}

export default App
