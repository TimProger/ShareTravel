import React from "react"
import {useActions} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import Profile from "./Profile";

function ProfileContainer() {
    // Получение пользователя, ошибки и статуса загрузки
    const {profile, error, loading} = useTypedSelector(state => state.profile)

    // Получаю функцию для получения пользователя
    const {fetchProfile} = useActions()

    return <>
                <Profile profile={profile}
                        error={error}
                        loading={loading}
                        fetchProfile={fetchProfile}
                />
           </>
}

export default ProfileContainer;