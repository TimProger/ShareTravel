import React from "react";
import './Navbar.css'
import {useTypedSelector} from "../../hooks/useTypedSelector";
import Navbar from "./Navbar";
import {useActions} from "../../hooks/useActions";

function NavbarContainer(){
    // Получение пользователя
    const {user} = useTypedSelector(state => state.auth)

    const {logout} = useActions()

    // Создание навигационной панели с переданным пользователем
    return <Navbar user={user}
                   logout={logout}
    />
}

export default NavbarContainer