import React from "react"
// import {useParams} from "react-router-dom";
import './Profile.css';
import { FiMapPin } from "react-icons/fi";
// function Profile(props: any) {
//     // Получение поля id из url при помощи useParams
//     const {id} = useParams();
//
//     // Получаю пользователя используя полученный id
//     React.useMemo(() => {
//         props.fetchProfile(id)
//     }, [1])
//
//     // Проверяю статус загрузки
//     if (props.loading) {
//         return (
//             <div className="page">
//                 <h1>Идет загрузка...</h1>
//             </div>
//         )
//     }
//
//     // Проверяю статус ошибки
//     if (props.error) {
//         return <h1>{props.error}</h1>
//     }
//
//     return (
//         <div className="profile">
//             <div className="profile-background">
//                 <img className="profile-background-img" src="https://images.unsplash.com/photo-1585170466274-9e8dc02e14d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YXdlc29tZSUyMHBpY3xlbnwwfHwwfHw%3D&w=1000&q=80" alt="background"/>
//                 <div className="">
//                     <img className="profile-avatar-img" src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Alberto_conversi_profile_pic.jpg" alt="avatar"/>
//                 </div>
//                 <div className="profile-name-surname">{props.profile.name}</div>
//                 <div className="profile-text">{props.profile.text}</div>
//                 <div className="btn-sub_follow">
//                     <div className="sub">1000<br/>subscribers</div>
//                     <div className="follow">1000<br/>followers</div>
//                 </div>
//                 <div className="btn-message_follow">
//                     <button className="btn-follow">Подписаться</button>
//                     <button className="btn-message">Сообщение</button>
//                 </div>
//             </div>
//         </div>
//     )
// }

class Profile extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

    }

    // Получаю пользователя используя полученный id
    componentDidMount() {
        this.props.fetchProfile(this.props.id)
    }

    // Удаляю пользователя
    componentWillUnmount() {
        this.props.dropProfile()
    }

    render() {

        // Проверяю статус загрузки
        if (this.props.loading) {
            return (
                <div className="page">
                    <h1>Идет загрузка...</h1>
                </div>
            )
        }

        // Проверяю статус ошибки
        if (this.props.error) {
            return <h1>{this.props.error}</h1>
        }

        return (
            <div className="profile">
                <div className="profile-background">
                    <img className="profile-background-img" src="https://images.unsplash.com/photo-1585170466274-9e8dc02e14d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YXdlc29tZSUyMHBpY3xlbnwwfHwwfHw%3D&w=1000&q=80" alt="background"/>
                    <div className="">
                        <img className="profile-avatar-img" src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Alberto_conversi_profile_pic.jpg" alt="avatar"/>
                    </div>
                    <div className="profile-name-surname">{this.props.profile.name}</div>
                    <div className="profile-text">{this.props.profile.text}</div>
                    <div className="profile-city-text"><FiMapPin/>city</div>
                    <div className="btn-sub_follow">
                        <div className="sub"><span>followers</span><br/>1000</div>
                        <div className="follow"><span>following</span><br/>1000 </div>
                    </div>
                    <div className="btn-message_follow">
                        <button className="btn-follow">Подписаться</button>
                        <button className="btn-message">Сообщение</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;
