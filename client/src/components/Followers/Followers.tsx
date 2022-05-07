import React from 'react';
import './Followers.css'
import Follower from "./Follower/Follower";
import {IUsersProps} from "../../types/userType";
import FollowersLoading from "../Loadings/Followers/FollowersLoading";

// * ANCHOR  Пришлось много чего поменять, чтобы работала подгрузка
// Возможно переделаю

const Followers: React.FC<IUsersProps> = (props) => {
    const [followsPage, setfollowsPage] = React.useState(1)
    const [followersPage, setfollowersPage] = React.useState(1)
    const [fetching, setFetching] = React.useState(true)

    const scrollHandler = () => {
        let scrollPos = document.documentElement.scrollHeight - (document.documentElement.scrollTop + window.innerHeight)
        if(scrollPos < Math.abs(props.leng)*80+60){
            document.removeEventListener('scroll', scrollHandler)
            setFetching(true)
            setTimeout(()=>document.addEventListener('scroll', scrollHandler), 300)
            console.log(props.follows)
        }
    }

    // Добавляю ивент и удаляю его при переходе на другую страницу
    React.useEffect(() => {
        document.addEventListener('scroll', scrollHandler)
        return function (){
            props.dropUsers()
            document.removeEventListener('scroll', scrollHandler)
        }
    }, [])
    // Получаю пользователей
    React.useEffect(() => {
        if(fetching){
            if(props.leng>10){
                props.fetchUsers(followersPage, true)
                setfollowersPage(prevState => prevState + 1)
            }else if(props.leng< -10){
                props.fetchUsers(followsPage, false)
                setfollowsPage(prevState => prevState + 1)
            }else{
                props.fetchUsers(followersPage, true)
                setfollowersPage(prevState => prevState + 1)
                props.fetchUsers(followsPage, false)
                setfollowsPage(prevState => prevState + 1)
            }
            setFetching(false)
        }
    }, [fetching])

    // Проверяю статус загрузки

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
             <div className='column'><h4 className='columnTitle'>Подписки</h4>{props.follows.map((user:any, index: number) => <Follower key={index} user={user}/>)}
            {props.loading ? <div className="load">Идёт загрузка</div> : ""}</div>
             <div className='column'><h4 className='columnTitle'>Подписчики</h4>{props.followers.map((user:any, index: number) => <Follower key={index} user={user} />)}
            {props.loading ? <div className="load">Идёт загрузка</div> : ""}</div>
            
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
