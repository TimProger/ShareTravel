import React, {useEffect} from "react"

// Импортирую стили
import './Posts.css'
// Импортирую компоненту поста
import Post from "./Post/Post";
// Импортирую функцию для создания контейнерной компоненты
import {connect} from "react-redux";
// Импортирую ActionCreator'ы
import {fetchPosts, likePost, loadComments} from "../../store/actionCreators/postAC";

function Posts(props: any){

    // Получаю пользователей путём вызова ActionCreator
    useEffect(() => {
        props.fetchPosts()
    }, [])

    // Проверяю статус загрузки
    if (props.loading) {
        // Если статус true, то пользователь будет видеть этот код
        return <h1>Идет загрузка...</h1>
    }

    // Проверяю статус ошибки
    if (props.error) {
        // Если есть ошибка, то пользователь будет видеть этот код
        return <h1>{props.error}</h1>
    }

    // Вывожу посты, создавая под каждого компоненту Post
    return (
        <div className="posts">
            {props.posts.map((el: any, index: number)=>{
                return <Post loadComments={props.loadComments} likePost={props.likePost} key={index} post={el}/>
            })}
        </div>
    )
}

// Получаю пропсы, которые должен передать в компоненту
let mapStateToProps = (state: any) => {
    return {
        posts: state.post.posts,
        error: state.post.error,
        loading: state.post.loading
    }
}

// Создаю контейнерную компоненту PostsContainer при помощи функции connect и
// передаю в неё необходимые компоненте ActionCreator'ы и пропсы
let PostsContainer = connect(mapStateToProps, {
    fetchPosts,
    likePost,
    loadComments,
})(Posts);

export default PostsContainer;
