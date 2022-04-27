import React, {useEffect} from 'react';
import './Followers.css'
import Follower from "./Follower/Follower";
import {IUser} from "../../types/userType";

const Followers = (props: any) => {

    // Получаю пользователей
    useEffect(() => {
        props.fetchUsers()
    }, [])

    // Проверяю статус загрузки
    if (props.loading) {
        return <h1>Идет загрузка...</h1>
    }

    // Проверяю статус ошибки
    if (props.error) {
        return <h1>{props.error}</h1>
    }

    return (
        <div className={'followers'}>
            {/*
                Вывожу пользователей, создавая под каждого компоненту Follower
                А также проверяю статус подписки (Временное решение)
             */}
            {props.users.map((follower: IUser) => <Follower key={follower.id} follower={follower} />)}
        </div>
    );
};

export default Followers;
