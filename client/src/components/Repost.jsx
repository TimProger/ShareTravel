import React from "react"
//пост

function Repost(){
    return (
        <div className="post">
            <div className="name">
                <a href="" className="link_to_prof"> <img className="post_profile" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"  alt="" />
                    <p className='p_post'>Эллин Пейдж <span>репостнула</span></p>
                </a>
                <p>Привет</p>
                <div className="repost">
                    <a href="" className="link_to_prof" ><img className="reprofile" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"  alt="" />
                        <p className='p_repost'> Нагибатор3000 </p></a>
                    <p>Шалом</p>
                </div>
            </div>

        </div>

    )
}

export default Repost;
