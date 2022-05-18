import React, {useEffect} from "react"
import './App.css';
import {useTypedSelector} from "./hooks/useTypedSelector";
import AuthPage from "./components/pages/Auth/AuthPage";
import MainPage from "./components/pages/Main/MainPage";
import PageLoading from "./components/Loadings/Page/PageLoading";
import {useActions} from "./hooks/useActions";

function App(){
    // Получение куки для аутентификации
    const {checkAuth} = useActions()

    // Проверяю наличие куки и если она есть, то ищу пользователя по данным в ней
    useEffect(() => {
        if (localStorage.getItem('token')) {
            checkAuth()
        }
    }, [])

    const {isAuth, loading} = useTypedSelector(state => state.auth)
    const {theme} = useTypedSelector(state => state.profile)

    if(loading){
        return <PageLoading />
    }

    return (
        <>
            {/* Проверка авторизации */}
            {isAuth ? <MainPage theme={theme}/> : <AuthPage />}
        </>
    )
}

export default App