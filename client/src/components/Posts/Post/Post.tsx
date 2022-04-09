import React from "react"
import {NavLink} from "react-router-dom";
import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai'
import {VscComment} from "react-icons/vsc";

function Post(props: any){

    return (
        // <div className="post">
        //     <div className="post-content">
        //         <div className="post-header">
        //             <div className="post-profile">
        //                 <NavLink
        //                     to={'/user/'+props.post.uid}
        //                     className='post-profile-avatar'>
        //                     <img src={props.post.avatar} alt={props.post.name} />
        //                 </NavLink>
        //                 <NavLink
        //                     to={'/user/'+props.post.uid}
        //                     className='post-profile-text'>
        //                     {props.post.name} {props.post.surname}
        //                 </NavLink>
        //             </div>
        //         </div>
        //         {props.post.text ? <div className='post-text'>{props.post.text}</div> : '' }
        //         {props.post.image ? <img className='post-img' src={props.post.image} alt={props.post.name + ' img'} /> : '' }
        //         <div className="post-footer">
        //             <div className="post-likes">
        //                 <div
        //                     onClick={()=>props.likePost(props.post.id)}
        //                     className="like-btn">
        //                     {props.post.liked ? <AiFillHeart className={'post-likes-icon post-liked'}/> : <AiOutlineHeart className={'post-likes-icon post-unliked'}/>}
        //                 </div>
        //                 <div className="likes">{props.post.likes}</div>
        //             </div>
        //             <div className="post-comment-btn">
        //                 <div
        //                     onClick={()=>props.loadComments(props.post.id)}
        //                     className="comments-btn">
        //                     <VscComment className={'post-comments-icon'}/>
        //                 </div>
        //                 <div className="comments">{props.post.totalComments}</div>
        //             </div>
        //         </div>
        //     </div>
        //
        //     {props.post.comments.length > 0 ?
        //         <>
        //             <div className="line"/>
        //             <div className="post-comment-blocks">
        //                 {props.post.comments.map((el: any, index: number) => {
        //                     return (
        //                         <div key={index} className={'post-comment-block'}>
        //                             <div className="comment-header">
        //                                 <div className="comment-profile">
        //                                     <NavLink
        //                                         to={'/user/'+el.uid}
        //                                         className='comment-profile-text'>
        //                                         {el.name} {el.surname}
        //                                     </NavLink>
        //                                 </div>
        //                             </div>
        //                             <div className="comment-content">
        //                                 {el.text ? <div className='comment-text'>{el.text}</div> : '' }
        //                                 {el.image ? <img className='comment-img' src={el.image} alt={el.name + ' img'} /> : '' }
        //                             </div>
        //                         </div>
        //                     )
        //                 })}
        //             </div>
        //         </>
        //         :
        //         ''
        //     }
        // </div>
        <div className="post">
            <div className="post-content">
                <div className="post-header">
                    <div className="post-profile">
                        <NavLink
                            to={'/user/'+props.post.userId}
                            className='post-profile-avatar'>
                            <img src={props.post.avatar} alt={props.post.userId} />
                        </NavLink>
                        <NavLink
                            to={'/user/'+props.post.userId}
                            className='post-profile-text'>
                            Пользователь {props.post.userId}
                        </NavLink>
                    </div>
                </div>
                <div className='post-text'>{props.post.text}</div>
                <div className='post-text'>{props.post.body}</div>
            </div>
        </div>
    )
}

export default Post;