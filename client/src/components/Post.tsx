import React from "react"
//пост

function Post(props: { user: { name: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; text: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }; }){
    return (
        <div className="post">
            <div className="name">
                <a href="" className="link_to_prof" >
                    <img className="post_profile" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"  alt="" />
                    <p className='p_post'>{props.user.name} <span>опубликовал(а)</span></p>
                </a>
                <p>{props.user.text}</p>
            </div>
        </div>
    )
}

export default Post;

