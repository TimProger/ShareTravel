import React, {useEffect} from 'react';
import './Followers.css'
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";
import Follower from "./Follower/Follower";

const Followers = () => {
    const {users, error, loading} = useTypedSelector(state => state.user)
    const {fetchUsers} = useActions()

    useEffect(() => {
        fetchUsers()
    }, [])

    if (loading) {
        return <h1>Идет загрузка...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div className={'followers'}>
            {users.map(follower => follower.subscribed ?
                    <Follower key={follower.id} follower={follower} subscribed={true} />
                    :
                    <Follower key={follower.id} follower={follower} subscribed={false}/>
            )}
        </div>
    );
};

export default Followers;
