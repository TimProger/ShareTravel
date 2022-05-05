import React from "react"
import './Posts.css'
import Post from "./Post/Post";
import {IPostsProps} from "../../types/postType";


function Posts(props: IPostsProps){
    const [page, setPage] = React.useState(1)
    const [fetching, setFetching] = React.useState(true)

    const scrollHandler = () => {
        let scrollPos = document.documentElement.scrollHeight - (document.documentElement.scrollTop + window.innerHeight)
        if(scrollPos < 200){
            document.removeEventListener('scroll', scrollHandler)
            setFetching(true)
            setTimeout(()=>document.addEventListener('scroll', scrollHandler), 1000)
        }
    }

    // Добавляю ивент и удаляю его при переходе на другую страницу
    React.useEffect(() => {
        document.addEventListener('scroll', scrollHandler)
        return function (){
            props.dropPosts()
            document.removeEventListener('scroll', scrollHandler)
        }
    }, [])

    // Получаю посты
    React.useEffect(() => {
        if(fetching){
            props.fetchPosts(page)
            setPage(prevState => prevState + 1)
            setFetching(false)
        }
    }, [fetching])

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
            {props.posts.map((el, index: number)=>{
                return <Post loadComments={props.loadComments} likePost={props.likePost} key={index} post={el}/>
            })}
            {props.loading ? <div id="loading">Идёт загрузка</div> : ""}
        </div>
    )
}

export default Posts;
