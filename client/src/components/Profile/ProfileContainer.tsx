import React from "react"
import {useActions} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import Profile from "./Profile";
import {useParams} from "react-router-dom";

function ProfileContainer() {
    // Получение пользователя, ошибки и статуса загрузки
    const {profile, error, loading} = useTypedSelector(state => state.profile)

    // Получение поля id из url при помощи useParams
    const {id} = useParams();

    // Получаю функцию для получения пользователя
    const {fetchProfile, dropProfile} = useActions()

    return <Profile profile={profile}
                    error={error}
                    loading={loading}
                    fetchProfile={fetchProfile}
                    dropProfile={dropProfile}
                    id={id}
                />
}

export default ProfileContainer;