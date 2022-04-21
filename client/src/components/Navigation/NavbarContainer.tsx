import React from "react";
import './Navbar.css'
import {useTypedSelector} from "../../hooks/useTypedSelector";
import Navbar from "./Navbar";

function NavbarContainer(){
    // Получение пользователя
    const {user} = useTypedSelector(state => state.profile)

    // Создание навигационной панели с переданным пользователем
    return <Navbar user={user} />
}

export default NavbarContainer