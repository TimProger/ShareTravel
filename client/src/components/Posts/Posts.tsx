import React, {useEffect} from "react"

// Импортирую стили
import './Posts.css'
// Импортирую компоненту поста
import Post from "./Post/Post";
// Импортирую изменённый для работы с типами хук useSelector
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";

function Posts(){
    const {posts, error, loading} = useTypedSelector(state => state.post)
    const {fetchPosts, likePost, loadComments} = useActions()

    // Получаю пользователей путём вызова ActionCreator
    useEffect(() => {
        fetchPosts()
    }, [])

    // Проверяю статус загрузки
    if (loading) {
        // Если статус true, то пользователь будет видеть этот код
        return <h1>Идет загрузка...</h1>
    }

    // Проверяю статус ошибки
    if (error) {
        // Если есть ошибка, то пользователь будет видеть этот код
        return <h1>{error}</h1>
    }

    // Вывожу посты, создавая под каждого компоненту Post
    return (
        <div className="posts">
            {posts.map((el: any, index: number)=>{
                return <Post loadComments={loadComments} likePost={likePost} key={index} post={el}/>
            })}
        </div>
    )
}

export default Posts;
