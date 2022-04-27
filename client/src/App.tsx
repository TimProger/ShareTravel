import React, {useEffect} from "react"
import './App.css';
import {useTypedSelector} from "./hooks/useTypedSelector";
import AuthPage from "./components/pages/Auth/AuthPage";
import MainPage from "./components/pages/Main/MainPageContainer";
import {useActions} from "./hooks/useActions";

function App(){
    // Получение куки для аутентификации
    const {checkCookie} = useActions()

    // @ts-ignore
    // Проверяю наличие куки и если она есть, то ищу пользователя по данным в ней
    useEffect(()=>checkCookie(), [])
    const {isAuth, loading, error} = useTypedSelector(state => state.auth)

    if(loading){
        return <h1>Loading</h1>
    }

    return (
        <>
            {/* Проверка авторизации */}
            {isAuth ? <MainPage /> : <AuthPage />}
        </>
    )
}

export default App