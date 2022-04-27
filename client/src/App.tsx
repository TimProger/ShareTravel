import React, {useEffect} from "react"
import './App.css';
import {useTypedSelector} from "./hooks/useTypedSelector";
import AuthPage from "./components/pages/Auth/AuthPage";
import MainPage from "./components/pages/Main/MainPage";
import {useActions} from "./hooks/useActions";

function App(){
    // Получение куки для аутентификации
    const {checkCookie} = useActions()
    // @ts-ignore
    useEffect(()=>checkCookie(), [])
    const {isAuth} = useTypedSelector(state => state.auth)
    return (
        <>
            {/* Проверка авторизации */}
            {isAuth ? <MainPage /> : <AuthPage />}
        </>
    )
}

export default App