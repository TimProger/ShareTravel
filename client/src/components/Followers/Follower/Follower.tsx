import React from "react"
import './Follower.css'
import { NavLink } from "react-router-dom";
import { IUserProps } from "../../../types/userType";

const Follower: React.FC<IUserProps> = (props) => {

    // Создаю обработчики события нажатия
    const follow = (id: number) => {
        console.log(id)
    }
    // const unfollow = (id: number) => {
    //     console.log(id)
    // }

    // Вывожу блок с данными переданными через props
    return (
        <>
            <div className={props.theme === 'light' ? "follower follower-light" : "follower follower-dark"}>
                <img className="follower-image" alt={props.user.name.first + props.user.name.last + "profile picture"} src={props.user.picture.medium || "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"} />
                <div className="follower-header">
                    <p className="follower-profile" >
                        {/* Создаю ссылку ведущую на страницу профиля */}
                        <NavLink
                            to={'/user/' + props.user.login.uuid + '/?page=' + props.user.page}
                            className='follower-profile-name'
                        >
                            {/* Имя и фамиля пользователя */}
                            {props.user.name.first} {props.user.name.last}
                        </NavLink>
                        <span className="follower-profile-text">
                            {/* Описание профиля пользователя */}
                            {props.user.login.username || "Hello"}
                        </span>
                    </p>
                </div>
                {props.followed ? <button
                    onClick={() => follow(props.user.login.uuid)}
                    className="follower-btn">
                    Отписаться
                </button> : <button
                    onClick={() => follow(props.user.login.uuid)}
                    className="follower-btn">
                    Подписаться
                </button>}

            </div>
        </>
    )
}

export default Follower;
