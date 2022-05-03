import React from "react"
import './Posts.css'
import Post from "./Post/Post";
import PostsLoading from "../Loadings/Posts/PostsLoading";

function Posts(props: any){
    const [page, setPage] = React.useState(1)
    const [fetching, setFetching] = React.useState(true)

    const scrollHandler = (e: any) => {
        let scrollPos = e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight)
        if(scrollPos < 200){
            window.scrollTo(0, e.target.documentElement.scrollTop-100)
            setFetching(true)
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
            console.log(1)
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
            {props.posts.map((el: any, index: number)=>{
                return <Post loadComments={props.loadComments} likePost={props.likePost} key={index} post={el}/>
            })}
            {props.loading ? <div id="loading">Идёт загрузка</div> : ""}
        </div>
    )
}

export default Posts;
