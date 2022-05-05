import React from "react"
import {useActions} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useParams} from "react-router-dom";
import Profile from "./Profile";

function ProfileContainer() {
    // Получение пользователя, ошибки и статуса загрузки
    const {profile, error, loading} = useTypedSelector(state => state.profile)

    // Получаю функцию для получения пользователя
    const {fetchProfile, dropProfile} = useActions()

    // Получение поля id из url при помощи useParams
    const {id} = useParams();

    return <Profile profile={profile}
                    error={error}
                    loading={loading}
                    fetchProfile={fetchProfile}
                    dropProfile={dropProfile}
                    id={String(id)}
                />
}

export default ProfileContainer;