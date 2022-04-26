import React from "react"
import {useParams} from "react-router-dom";
import {useActions} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import Profile from "./Profile";

function ProfileContainer() {
    // Получение пользователя, ошибки и статуса загрузки
    const {profile, error, loading} = useTypedSelector(state => state.profile)

    // Получение поля id из url при помощи useParams
    let {id} = useParams();

    // Получаю функцию для получения пользователя
    const {fetchProfile} = useActions()

    return <>
                <Profile profile={profile}
                        error={error}
                        loading={loading}
                        fetchProfile={fetchProfile}
                        id={id}
                />
           </>
}

export default ProfileContainer;