import React from "react";
import './Navbar.css'
import {useTypedSelector} from "../../hooks/useTypedSelector";
import Navbar from "./Navbar";
import {useActions} from "../../hooks/useActions";

function NavbarContainer(){
    // Получение пользователя
    const {user} = useTypedSelector(state => state.auth)

    // Получение темы
    const {theme} = useTypedSelector(state => state.theme)

    const {logout, changeTheme} = useActions()

    // Создание навигационной панели с переданным пользователем
    return <Navbar user={user}
                   logout={logout}
                   changeTheme={changeTheme}
                   theme={theme}
    />
}

export default NavbarContainer