import React, {useEffect} from "react"
import './Profile.css';
import {useParams} from "react-router-dom";
import {useActions} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";

function Profile() {
    // Получение пользователя, ошибки и статуса загрузки
    const {profile, error, loading} = useTypedSelector(state => state.profile)

    // Получение поля id из url при помощи useParams
    let {id} = useParams();

    // Получаю функцию для получения пользователя
    const {fetchProfile} = useActions()

    useEffect(() => {
        // Получаю пользователя используя полученный id
        fetchProfile(id)
    }, [])

    // Проверяю статус загрузки
    if (loading) {
        return (
            <div className="page">
                <h1>Идет загрузка...</h1>
            </div>
        )
    }

    // Проверяю статус ошибки
    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div className="page">
            {/* Вывожу поле name пользователя найденного при помощи fetchProfile */}
            {profile ? profile.name : ''}
        </div>
    )
}

export default Profile;