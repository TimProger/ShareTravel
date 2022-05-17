import React from "react"
// import {useParams} from "react-router-dom";
import './Profile.css';
import { FiMapPin } from "react-icons/fi";
import {isEmpty} from "../../utils/utils";
import {IProfileProps} from "../../types/profileType";
import NotFound from "../NotFound/NotFound";

function Profile(props: IProfileProps) {

    // Получаю пользователя используя полученный id
    React.useEffect(() => {
        props.fetchProfile(props.id)
        return function (){
            props.dropProfile()
        }
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

    // Проверяю объект на наличие свойств
    if(isEmpty(props.profile)){
        return <NotFound />
    }

    return (
        <div className={props.theme === 'light' ? "profile profile-light" : "profile profile-dark"}>
            <div className="profile-background">
                <img className="profile-background-img" src="https://images.unsplash.com/photo-1585170466274-9e8dc02e14d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YXdlc29tZSUyMHBpY3xlbnwwfHwwfHw%3D&w=1000&q=80" alt="background"/>
                <div className="">
                    <img className="profile-avatar-img" src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Alberto_conversi_profile_pic.jpg" alt="avatar"/>
                </div>
                <div className="profile-name-surname">{props.profile.name}</div>
                <div className="profile-text">{props.profile.company.catchPhrase}</div>
                <div className="profile-city-text"><FiMapPin/>{props.profile.address.street} {props.profile.address.suite}</div>
                <div className="sub_follow">
                    <div className="sub_follow__btn sub"><span>followers</span>1000</div>
                    <div className="sub_follow__btn follow"><span>following</span>1000 </div>
                </div>
                <div className="btn-container">
                    <div className="btn-follow__container">
                        <button className="btn-follow">Подписаться</button>
                    </div>
                    <div className="btn-message__container">
                        <button className="btn-message">Сообщение</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;
