import React from 'react';
import './Followers.css'
import Follower from "./Follower/Follower";
import { IUsersProps } from "../../types/userType";
import SearchContainer from './Search/SearchContainer';
import FollowersLoading from "../Loadings/Followers/FollowersLoading";

// TODO Подгрузка НЕ работает нормально, надо переделать

const Followers: React.FC<IUsersProps> = (props) => {
    const [followersPage, setFollowersPage] = React.useState(1)
    const [fetching, setFetching] = React.useState(true)

    const scrollHandler = () => {
        let scrollPos = document.documentElement.scrollHeight - (document.documentElement.scrollTop + window.innerHeight)
        if (scrollPos < 600) {
            // if(scrollPos < Math.abs(props.follows.length-props.followers.length)*60+60){
            document.removeEventListener('scroll', scrollHandler)
            setFetching(true)
            setTimeout(() => document.addEventListener('scroll', scrollHandler), 300)
        }
    }

    // Добавляю ивент и удаляю его при переходе на другую страницу
    React.useEffect(() => {
        document.addEventListener('scroll', scrollHandler)
        return function () {
            props.dropUsers()
            document.removeEventListener('scroll', scrollHandler)
        }
    }, [])

    // Получаю пользователей
    React.useEffect(() => {
        if (fetching) {
            // if(props.follows.length>props.followers.length){
            //     props.fetchUsers(followersPage, true)
            //     setFollowersPage(prevState => prevState + 1)
            // }else if(props.follows.length<props.followers.length){
            //     props.fetchUsers(followsPage, false)
            //     setFollowsPage(prevState => prevState + 1)
            // }else{
            props.fetchUsers(followersPage)
            setFollowersPage(prevState => prevState + 1)
            // }
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
            <SearchContainer />
            {/*
                Вывожу пользователей, создавая под каждого компоненту Follower
                А также проверяю статус подписки (Временное решение)
            */}
            <div className={props.theme === 'light' ? "container container-light" : "container container-dark"}>
                <div className='column'>
                    <h3 className='columnTitle'>Подписки</h3>
                    {props.follows.map((user: any, index: number) => <Follower key={index} user={user} theme={props.theme} />)}
                    {props.loading ? <div className="load">Идёт загрузка</div> : ""}
                </div>
                <div className='column'>
                    <h3 className='columnTitle'>Подписчики</h3>
                    {props.followers.map((user: any, index: number) => <Follower key={index} user={user} followed={true} theme={props.theme} />)}
                    {props.loading ? <div className="load">Идёт загрузка</div> : ""}
                </div>
            </div>
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
