import React from "react"
import './App.css';
import {useTypedSelector} from "./hooks/useTypedSelector";
import AuthPage from "./components/pages/Auth/AuthPage";
import MainPage from "./components/pages/Main/MainPage";

function App(){
    // Получение куки для аутентификации
    const {isAuth} = useTypedSelector(state=>state.profile)
    return (
        <div className='wrapper'>
            {/* Проверка наличия куки */}
            {isAuth ? <MainPage /> : <AuthPage />
            }

        </div>
    )
}

export default App