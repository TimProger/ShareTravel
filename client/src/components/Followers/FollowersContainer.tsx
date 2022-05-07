import React from 'react';
import './Followers.css'
import {useActions} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import Followers from "./Followers";

const FollowersContainer = () => {
    // Получение пользователей, ошибки и статуса загрузки
    const {follows, followers, error, loading} = useTypedSelector(state => state.user)

    // Получаю функцию для получения пользователей
    const {fetchUsers, dropUsers} = useActions()

    return <Followers follows={follows}
                      followers={followers}
                      error={error}
                      loading={loading}
                      leng={follows.length-followers.length}
                      dropUsers={dropUsers}
                      fetchUsers={fetchUsers}/>;
};

export default FollowersContainer;
