import React, {useEffect} from 'react';

// Импортирую стили
import './Followers.css'
// Импортирую изменённый для работы с типами хук useSelector
import {useTypedSelector} from "../../hooks/useTypedSelector";
// Импортирую изменённый хук для получения ActionCreator'ов
import {useActions} from "../../hooks/useActions";
// Импортирую компоненту пользователя
import Follower from "./Follower/Follower";

const Followers = () => {
    // Получение пользователей, ошибки и статуса загрузки из состояния при помощи типизированного хука
    const {users, error, loading} = useTypedSelector(state => state.user)

    // Получаю необходимый ActionCreator для получения пользователей
    const {fetchUsers} = useActions()

    // Получаю пользователей путём вызова ActionCreator
    useEffect(() => {
        fetchUsers()
    }, [])

    // Проверяю статус загрузки
    if (loading) {
        // Если статус true, то пользователь будет видеть этот код
        return <h1>Идет загрузка...</h1>
    }

    // Проверяю статус ошибки
    if (error) {
        // Если есть ошибка, то пользователь будет видеть этот код
        return <h1>{error}</h1>
    }

    // Вывожу пользователей, создавая под каждого компоненту Follower
    return (
        <div className={'followers'}>
            {users.map(follower => follower.subscribed ?
                    <Follower key={follower.id} follower={follower} subscribed={true} />
                    :
                    <Follower key={follower.id} follower={follower} subscribed={false}/>
            )}
        </div>
    );
};

export default Followers;
