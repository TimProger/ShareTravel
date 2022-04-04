import React from "react"
import './Profile.css';
import {useParams} from "react-router-dom";
import {useTypedSelector} from "../../hooks/useTypedSelector";

function Profile(){
    const {users} = useTypedSelector(state => state.user)
    let { id } = useParams();
    console.log(users)
    return (
        <div className="page">
            {id}
        </div>
    )
}

export default Profile;