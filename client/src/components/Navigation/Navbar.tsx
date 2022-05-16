import React from "react";
import './Navbar.css'
import { NavLink } from "react-router-dom";
import {
    IoNewspaperOutline,
    IoPeopleOutline,
    IoChatbubblesOutline,
    IoStarOutline,
    IoHeartOutline,
    IoSettingsOutline,
    IoHelpCircleOutline,
    IoMapOutline,
    IoExitOutline} from "react-icons/io5";

function Navbar(props: any){

    // Создание навигационной панели с блоком пользователя полученным через props
    return (
        <div className="navbar-container">
            <p className="navbar-logo">Hike</p>

            <div className="navbar-profile">
                {/* Ссылка ведущая на страницу профиля */}
                <NavLink
                    to={'/user/'+props.user.id}
                    className='navbar-profile-avatar'
                >
                    {/* Аватар пользователя */}
                    <img src={props.user.avatar} alt={props.user.name} />
                </NavLink>
                <NavLink to={'/user/' + props.user.id} className='navbar-profile-text'>
                    <p className='profile-name'>
                        {/* Имя и фамилия пользователя */}
                        {props.user.name} <br/> {props.user.surname}
                    </p>
                </NavLink>
            </div>

            {/* Просто ссылки */}
            <div className='menu_links'>
                <NavLink to='/'>
                    <IoNewspaperOutline className="icons" />
                    <p className="menu_text">Новости</p>
                </NavLink>

                <NavLink to='followers'>
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

                <NavLink to='exit'>
                    <IoExitOutline className="icons" />
                    <p className="menu_text">Выйти</p>
                </NavLink>

                <NavLink to='help'>
                    <IoHelpCircleOutline className="icons" />
                    <p className="menu_text">Помощь</p>
                </NavLink>

            </div>
        </div>
    )
}

export default Navbar