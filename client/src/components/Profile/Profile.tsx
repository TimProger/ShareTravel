import React, {useEffect} from "react"
import './Profile.css';
import {useParams} from "react-router-dom";
import {useActions} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";

function Profile(props: any) {

    useEffect(() => {
        // Получаю пользователя используя полученный id
        props.fetchProfile(props.id)
    }, [])

    // Проверяю статус загрузки
    if (props.loading) {
        return (
            <div className="page">
                <h1>Идет загрузка...</h1>
            </div>
        )
    }

    // Проверяю статус ошибки
    if (props.error) {
        return <h1>{props.error}</h1>
    }

    return (
        <div className="page">
            {/* Вывожу поле name пользователя найденного при помощи fetchProfile */}
            {props.profile ? props.profile.name : ''}
        </div>
    )
}

export default Profile;