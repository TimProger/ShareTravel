import React, {useEffect} from "react"
import './App.css';
import {useTypedSelector} from "./hooks/useTypedSelector";
import AuthPage from "./components/pages/Auth/AuthPage";
import MainPage from "./components/pages/Main/MainPage";
import {useActions} from "./hooks/useActions";
import PageLoading from "./components/Loadings/Page/PageLoading"; // Loading by MattIn4D from Codepen.io

function App(){
    // Получение куки для аутентификации
    const {checkCookie} = useActions()

    // @ts-ignore
    // Проверяю наличие куки и если она есть, то ищу пользователя по данным в ней
    useEffect(()=>checkCookie(), [])

    const {isAuth, loading} = useTypedSelector(state => state.auth)

    if(loading){
        return <PageLoading />
    }

    return (
        <>
            {/* Проверка авторизации */}
            {isAuth ? <MainPage /> : <AuthPage />}
        </>
    )
}

export default App