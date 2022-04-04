import React from "react"
//пост

function Repost(props: { user: {
        text: any;
        name: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; secname: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }; }){
    return (
        <div className="post">
            <div className="name">
                <a href="" className="link_to_prof"> <img className="post_profile" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"  alt="" />
                    <p className='p_post'>{props.user.name} <br/> {props.user.secname}</p>
                </a>
                <p>{props.user.text}</p>
                <div className="repost">
                    <a href="" className="link_to_prof" ><img className="reprofile" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"  alt="" />
                        <p className='p_repost'> {props.user.name} <br/> {props.user.secname} </p></a>
                    <p>{props.user.text}</p>
                </div>
            </div>

        </div>

    )
}

export default Repost;
