import React, {useEffect} from "react"
import './Posts.css'
import Post from "./Post/Post";
import PostsLoading from "../Loadings/Posts/PostsLoading";

function Posts(props: any){

    // Получаю посты
    useEffect(() => {
        props.fetchPosts()
    }, [])

    // Проверяю статус загрузки
    if (props.loading) {
        return <PostsLoading />
    }

    // Проверяю статус ошибки
    if (props.error) {
        return <h1>{props.error}</h1>
    }

    return (
        <div className="posts">
            {/*
                Вывожу посты, создавая под каждого компоненту Post
                А также передаю в них полученные ранее функции
            */}
            {props.posts.map((el: any, index: number)=>{
                return <Post loadComments={props.loadComments} likePost={props.likePost} key={index} post={el}/>
            })}
        </div>
    )
}

export default Posts;
