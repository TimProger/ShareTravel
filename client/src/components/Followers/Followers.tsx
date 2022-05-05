import React from 'react';
import './Followers.css'
import Follower from "./Follower/Follower";
import {IUsersProps} from "../../types/userType";
import FollowersLoading from "../Loadings/Followers/FollowersLoading";

const Followers = (props: IUsersProps) => {

    // Получаю пользователей
    React.useEffect(() => {
        props.fetchUsers()
        return function (){
            props.dropUsers()
        }
    }, [])

    // Проверяю статус загрузки
    if (props.loading) {
        return <FollowersLoading />
    }

    // Проверяю статус ошибки
    if (props.error) {
        return <h1>{props.error}</h1>
    }

    return (
        <div className={'followers'}>
            {/*
                Вывожу пользователей, создавая под каждого компоненту Follower
                А также проверяю статус подписки (Временное решение)
             */}
            {props.users.map((user, index: number) => <Follower key={index} user={user} />)}
        </div>
    );
};

// class Followers1 extends React.Component<any, any> {
//
//     // Получаю пользователя используя полученный id
//     componentDidMount() {
//         this.props.fetchUsers()
//     }
//
//     // Удаляю пользователя
//     componentWillUnmount() {
//         this.props.dropUsers()
//     }
//
//     render() {
//
//         // Проверяю статус загрузки
//         if (this.props.loading) {
//             return (
//                 <FollowersLoading />
//             )
//         }
//
//         // Проверяю статус ошибки
//         if (this.props.error) {
//             return <h1>{this.props.error}</h1>
//         }
//
//         return (
//             <div className={'followers'}>
//                 {/*
//                 Вывожу пользователей, создавая под каждого компоненту Follower
//                 А также проверяю статус подписки (Временное решение)
//              */}
//                 {this.props.users.map((follower: IUser) => <Follower key={follower.id} follower={follower} />)}
//             </div>
//         )
//     }
// }

export default Followers;
