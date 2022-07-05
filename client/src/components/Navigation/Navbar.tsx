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
    IoExitOutline,
    IoMoonOutline,
    IoSunnyOutline,
} from "react-icons/io5";
import { useTranslation } from "react-i18next";

const lngs = {
    en: { nativeName: 'English' },
    ru: { nativeName: 'Руский' },
}

function Navbar(props: any) {

    const { t, i18n } = useTranslation()

    // Создание навигационной панели с блоком пользователя полученным через props
    return (
        <div className={props.theme === 'light' ? "navbar navbar-light" : "navbar navbar-dark"}>
            <div className="navbar-container">
                <NavLink to='/' className="navbar-logo">Hike</NavLink>

                <div className="navbar-profile">
                    {/* Ссылка ведущая на страницу профиля */}
                    <NavLink
                        to={'/user/' + props.user.id}
                        className='navbar-profile-avatar'
                    >
                        {/* Аватар пользователя */}
                        <img src={props.user.avatar} alt={props.user.name} />
                    </NavLink>
                    <NavLink to={'/user/' + props.user.id} className='navbar-profile-text'>
                        <p className='profile-name'>
                            {/* Имя и фамилия пользователя */}
                            {props.user.name} <br /> {props.user.surname}
                        </p>
                    </NavLink>
                </div>

                {/* Просто ссылки */}
                <div className='menu_links'>
                    <NavLink to='/'>
                        <IoNewspaperOutline className="icons" />
                        <p className="menu_text">{t('navbar.news')}</p>
                    </NavLink>

                    <NavLink to='followers'>
                        <IoPeopleOutline className="icons" />
                        <p className="menu_text">{t('navbar.followers')}</p>
                    </NavLink>

                    <NavLink to='/dialogs'>
                        <IoChatbubblesOutline className="icons" />
                        <p className="menu_text">{t('navbar.dialogs')}</p>
                    </NavLink>

                    <NavLink to='/map'>
                        <IoMapOutline className="icons" />
                        <p className="menu_text">{t('navbar.map')}</p>
                    </NavLink>

                    <NavLink to='recs'>
                        <IoHeartOutline className="icons" />
                        <p className="menu_text">{t('navbar.recs')}</p>
                    </NavLink>

                    <NavLink to='fav'>
                        <IoStarOutline className="icons" />
                        <p className="menu_text">{t('navbar.favs')}</p>
                    </NavLink>

                    <div className="line" />

                    <NavLink to='settings'>
                        <IoSettingsOutline className="icons" />
                        <p className="menu_text">{t('navbar.settings')}</p>
                    </NavLink>

                    <NavLink to='exit'>
                        <IoExitOutline className="icons" />
                        <p className="menu_text">{t('navbar.exit')}</p>
                    </NavLink>

                    <NavLink to='help'>
                        <IoHelpCircleOutline className="icons" />
                        <p className="menu_text">{t('navbar.help')}</p>
                    </NavLink>

                    <div>
                        {Object.keys(lngs).map((lng) => {
                            return <button type="submit" key={lng} onClick={() => i18n.changeLanguage(lng)}>{lng}</button>
                        })}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Navbar