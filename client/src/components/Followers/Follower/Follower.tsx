import React from "react"
import './Follower.css'
import {NavLink} from "react-router-dom";

function Follower(props: any){

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
                            to={'/user/'+props.follower.id}
                            className='follower-profile-name'
                        >
                            {/* Имя и фамиля пользователя */}
                            {props.follower.name} {props.follower.surname}
                        </NavLink>
                        <span className="follower-profile-text">
                            {/* Описание профиля пользователя */}
                            {props.follower.text}
                        </span>
                    </p>
                </div>
                <div className="follower-btn">
                    {/* Создание кнопки "подписаться" и "отписаться" в зависимости от статуса подписки */}
                    {props.subscribed ?
                        <button onClick={()=>follow(props.follower.id)} className={'follow'}>Подписаться</button>
                        :
                        <button onClick={()=>unfollow(props.follower.id)} className={'unfollow'}>Отписаться</button>
                    }

                </div>
            </div>
        </div>
    )
}

export default Follower;