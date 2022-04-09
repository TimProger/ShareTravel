import React from "react"
import {NavLink} from "react-router-dom";

function Follower(props: any){

    const follow = (id: number) => {
        console.log(id)
    }
    const unfollow = (id: number) => {
        console.log(id)
    }

    return (
        <div className="follower">
            <div className="follower-content">
                <div className="follower-header">
                    <p className="follower-profile" >
                        <NavLink
                            to={'/user/'+props.follower.id}
                            className='follower-profile-name'
                        >
                            {props.follower.name} {props.follower.surname}
                        </NavLink>
                        <span className="follower-profile-text">
                            {props.follower.text}
                        </span>
                    </p>
                </div>
                <div className="follower-btn">
                    {props.subscribed ?
                        <button onClick={()=>follow(props.follower.id)} className={'follow'}>Подписаться</button>
                        :
                        <button onClick={()=>unfollow(props.follower.id)} className={'unfollow'}>Отписаться</button>
                    }

                </div>
            </div>
        </div>
    )
}

export default Follower;