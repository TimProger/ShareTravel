import React, {useEffect} from "react"
import './Posts.css'
import Post from "./Post/Post";
import PostsLoading from "../Loadings/Posts/PostsLoading";

// function Posts(props: any){
//
//     // Получаю посты
//     useEffect(() => {
//         props.fetchPosts()
//     }, [])
//
//     // Проверяю статус загрузки
//     if (props.loading) {
//         return <PostsLoading />
//     }
//
//     // Проверяю статус ошибки
//     if (props.error) {
//         return <h1>{props.error}</h1>
//     }
//
//     return (
//         <div className="posts">
//             {/*
//                 Вывожу посты, создавая под каждого компоненту Post
//                 А также передаю в них полученные ранее функции
//             */}
//             {props.posts.map((el: any, index: number)=>{
//                 return <Post loadComments={props.loadComments} likePost={props.likePost} key={index} post={el}/>
//             })}
//         </div>
//     )
// }

class Posts extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

    }

    // Получаю посты
    componentDidMount() {
        this.props.fetchPosts()
    }

    // Удаляю посты
    componentWillUnmount() {
        this.props.dropPosts()
    }

    render() {

        // Проверяю статус загрузки
        if (this.props.loading) {
            return <PostsLoading />
        }

        // Проверяю статус ошибки
        if (this.props.error) {
            return <h1>{this.props.error}</h1>
        }

        return (
            <div className="posts">
                {/*
                    Вывожу посты, создавая под каждого компоненту Post
                    А также передаю в них полученные ранее функции
                */}
                {this.props.posts.map((el: any, index: number)=>{
                    return <Post loadComments={this.props.loadComments} likePost={this.props.likePost} key={index} post={el}/>
                })}
            </div>
        )
    }
}

export default Posts;
