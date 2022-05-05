import React from "react"
import './Follower.css'
import {NavLink} from "react-router-dom";
import {IUserProps} from "../../../types/userType";

const Follower: React.FC<IUserProps> = (props) =>{

    // Создаю обработчики события нажатия
    const follow = (id: number) => {
        console.log(id)
    }
    const unfollow = (id: number) => {
        console.log(id)
    }

    // Вывожу блок с данными переданными через props
    return (
        <div className="follower">
            <div className="follower-content">
                <div className="follower-header">
                    <p className="follower-profile" >
                        {/* Создаю ссылку ведущую на страницу профиля */}
                        <NavLink
                            to={'/user/'+props.user.id}
                            className='follower-profile-name'
                        >
                            {/* Имя и фамиля пользователя */}
                            {props.user.name} {props.user.surname}
                        </NavLink>
                        <span className="follower-profile-text">
                            {/* Описание профиля пользователя */}
                            {props.user.text}
                        </span>
                    </p>
                </div>
                <div className="follower-btn">
                    <button onClick={()=>follow(props.user.id)} className={'follow'}>Подписаться</button>
                </div>
            </div>
        </div>
    )
}

export default Follower;