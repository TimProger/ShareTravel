import React, {useEffect} from "react"

// Импортирую стили
import './Profile.css';
// Импортирую функцию для создания контейнерной компоненты
import {connect} from "react-redux";
// Импортирую хук для получения параметров из url
import {useParams} from "react-router-dom";
// Импортирую изменённый хук для получения ActionCreator'ов
import {useActions} from "../../hooks/useActions";
// Импортирую изменённый для работы с типами хук useSelector
import {useTypedSelector} from "../../hooks/useTypedSelector";

function Profile() {
    const {profile, error, loading} = useTypedSelector(state => state.profile)

    // Получение айдишника из url при помощи импортированного ранее хука
    let {id} = useParams();

    // Получаю необходимый ActionCreator для получения пользователей
    const {fetchProfile} = useActions()

    // Получаю пользователя путём вызова ActionCreator
    useEffect(() => {
        fetchProfile(id)
    }, [])

    // Проверяю статус загрузки
    if (loading) {
        // Если статус true, то пользователь будет видеть этот код
        return (
            <div className="page">
                <h1>Идет загрузка...</h1>
            </div>
        )
    }

    // Проверяю статус ошибки
    if (error) {
        // Если есть ошибка, то пользователь будет видеть этот код
        return <h1>{error}</h1>
    }

    // Вывожу пользователя найденного при помощи fetchProfile
    return (
        <div className="page">
            {profile ? profile.name : ''}
        </div>
    )
}

export default Profile;