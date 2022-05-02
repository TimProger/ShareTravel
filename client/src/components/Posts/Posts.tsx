import React, {useEffect, useState} from "react"
import './Posts.css'
import Post from "./Post/Post";
import PostsLoading from "../Loadings/Posts/PostsLoading";

function Posts(props: any){
    const [page, setPage] = useState(1)
    const [fetching, setFetching] = useState(true)

    const scrollHandler = (e: any) => {
        console.log(2)
        if(e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100){
            setFetching(true)
        }
    }

    // Получаю посты
    useEffect(() => {
        if(fetching){
            console.log(1)
            props.fetchPosts(page).then(()=>{
                setPage(prevState => prevState + 1)
                setFetching(false)
            })
        }
    }, [fetching])

    // Добавляю ивент и удаляю его при переходе на другую страницу
    useEffect(() => {
        console.log('Работает')
        document.addEventListener('scroll', scrollHandler)
        return function (){
            props.dropPosts()
            document.removeEventListener('scroll', scrollHandler)
        }
    }, [])

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
            <div id="scrollArea"/>
        </div>
    )
}

export default Posts;
