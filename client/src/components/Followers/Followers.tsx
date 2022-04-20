import React, {useEffect} from 'react';
import './Followers.css'
import {useActions} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import Follower from "./Follower/Follower";

const Followers = () => {
    // Получение пользователей, ошибки и статуса загрузки
    const {users, error, loading} = useTypedSelector(state => state.user)

    // Получаю функцию для получения пользователей
    const {fetchUsers} = useActions()

    useEffect(() => {
        // Получаю пользователей
        fetchUsers()
    }, [])

    // Проверяю статус загрузки
    if (loading) {
        return <h1>Идет загрузка...</h1>
    }

    // Проверяю статус ошибки
    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div className={'followers'}>
            {/*
                Вывожу пользователей, создавая под каждого компоненту Follower
                А также проверяю статус подписки (Временное решение)
             */}
            {users.map(follower => follower.subscribed ?
                    <Follower key={follower.id} follower={follower} subscribed={true} />
                    :
                    <Follower key={follower.id} follower={follower} subscribed={false}/>
            )}
        </div>
    );
};

export default Followers;
