import React, {useEffect} from "react"
import {NavLink} from "react-router-dom";
import './Post.css'
import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai'
import {VscComment} from "react-icons/vsc";
import {IPostProps} from "../../../types/postType";

const Post: React.FC<IPostProps> = (props) => {

    let [likes, setLikes] = React.useState(Math.floor(Math.random()*10))
    let [comments, setComments] = React.useState(Math.floor(Math.random()*10))
    let [liked, setLiked] = React.useState(false)
    let [textIndex, setTextIndex] = React.useState(0)

    let texts = [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus sit amet dictum sit amet justo. Dignissim cras tincidunt lobortis feugiat vivamus. Odio morbi quis commodo odio aenean sed adipiscing. Libero nunc consequat interdum varius sit amet mattis vulputate enim. Quis eleifend quam adipiscing vitae proin sagittis.',
        'Dui ut ornare lectus sit amet. Accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu. Sit amet massa vitae tortor condimentum lacinia.',
        'Tincidunt praesent semper feugiat nibh. Suspendisse interdum consectetur libero id faucibus nisl. Et netus et malesuada fames ac turpis egestas sed tempus.',
        'Mollis nunc sed id semper risus in hendrerit gravida rutrum. Pellentesque nec nam aliquam sem et tortor. Aliquet risus feugiat in ante metus dictum at tempor commodo.',
        'Ultrices dui sapien eget mi proin sed libero. Amet massa vitae tortor condimentum lacinia quis vel eros donec. In dictum non consectetur a erat nam at lectus urna.',
        'Cursus sit amet dictum sit amet justo donec enim. Ut pharetra sit amet aliquam id diam maecenas ultricies mi. Viverra nam libero justo laoreet sit amet cursus.',
        'Consequat ac felis donec et odio pellentesque diam volutpat. Parturient montes nascetur ridiculus mus mauris vitae ultricies leo. In pellentesque massa placerat duis ultricies lacus sed.',
        'Viverra nam libero justo laoreet sit amet cursus. Aenean sed adipiscing diam donec adipiscing tristique.',
        'Sit amet tellus cras adipiscing. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum lectus. Magna sit amet purus gravida quis.',
        'Consequat ac felis donec et odio pellentesque diam volutpat.',
    ]

    useEffect(()=>{
        setTextIndex(Math.floor(Math.random()*10))
    }, [textIndex])

    return (

        // Рендеринг поста
        <div className={props.theme === 'light' ? "post post-light" : "post post-dark"}>
            <div className="post-content">
                <div className="post-header">
                    <div className="post-profile">
                        <NavLink
                            to={'/user/'+props.post.login.uuid}
                            className='post-profile-avatar'>
                            <img src={props.post.picture.large} alt={props.post.userId} />
                        </NavLink>
                        <NavLink
                            to={'/user/'+props.post.login.uuid}
                            className='post-profile-text'>
                            {props.post.name.first} {props.post.name.last}
                        </NavLink>
                    </div>
                </div>
                <div className='post-text'>{texts[textIndex]}</div>
                <div className="line"/>
                <div className="post-footer">
                    <div className="post-likes">
                        <div
                            onClick={()=>{
                                liked ? setLikes(prevState => prevState-1) : setLikes(prevState => prevState+1)
                                setLiked(prevState => !prevState)
                            }}
                            className="like-btn">
                            {liked ? <AiFillHeart className={'post-likes-icon post-liked'}/> : <AiOutlineHeart className={'post-likes-icon post-unliked'}/>}
                        </div>
                        <div className="likes">{likes}</div>
                    </div>
                    <div className="post-comment-btn">
                        <div
                            onClick={()=>console.log('Вывод комментариев')}
                            className="comments-btn">
                            <VscComment className={'post-comments-icon'}/>
                        </div>
                        <div className="comments">{comments}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post;
