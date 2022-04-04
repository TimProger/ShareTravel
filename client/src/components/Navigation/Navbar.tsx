import React from "react";
import './Navbar.css'
import { NavLink } from "react-router-dom";
import { IoNewspaperOutline, IoPeopleOutline, IoChatbubblesOutline, IoStarOutline, IoHeartOutline, IoSettingsOutline, IoHelpSharp, IoMapOutline} from "react-icons/io5";
import {useTypedSelector} from "../../hooks/useTypedSelector";

function Navbar(){
    const {user} = useTypedSelector(state => state.user)
    return (
        <div className="navbar-container">
            <p className="navbar-logo">ShareTravel</p>

            <NavLink to={'/user/' + user.id} className='navbar-profile'>
               <img className="profile-image" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"  alt={user.name} />
                <p className='profile-name'>
                    {user.name} <br/> {user.surname}
                </p>
            </NavLink>

            <div className='menu_links'>
                <NavLink to='/'>
                    <IoNewspaperOutline className="icons" />
                    <p className="menu_text">Новости</p>
                </NavLink>

                <NavLink to='friends'>
                    <IoPeopleOutline className="icons" />
                    <p className="menu_text">Подписки</p>
                </NavLink>

                <NavLink to='/dialogs'>
                    <IoChatbubblesOutline className="icons" />
                    <p className="menu_text">Диалоги</p>
                </NavLink>

                <NavLink to='/map'>
                    <IoMapOutline className="icons" />
                    <p className="menu_text">Карта</p>
                </NavLink>

                <NavLink to='recs'>
                    <IoHeartOutline className="icons" />
                    <p className="menu_text">Для вас</p>
                </NavLink>

                <NavLink to='fav'>
                    <IoStarOutline className="icons" />
                    <p className="menu_text">Избранное</p>
                </NavLink>

                <div className="line"/>

                <NavLink to='settings'>
                    <IoSettingsOutline className="icons" />
                    <p className="menu_text">Настройки</p>
                </NavLink>

                <NavLink to='help'>
                    <IoHelpSharp className="icons" />
                    <p className="menu_text">Помощь</p>
                </NavLink>


            </div>
        </div>
    )
}

export default Navbar