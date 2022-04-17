import React, {useEffect} from "react"
import './Posts.css'
import Post from "./Post/Post";
import {connect} from "react-redux";
import {fetchPosts, likePost, loadComments} from "../../store/action-creators/post";

function Posts(props: any){

    useEffect(() => {
        props.fetchPosts()
    }, [])

    if (props.loading) {
        return <h1>Идет загрузка...</h1>
    }

    if (props.error) {
        return <h1>{props.error}</h1>
    }

    return (
        <div className="posts">
            {props.posts.map((el: any, index: number)=>{
                return <Post loadComments={props.loadComments} likePost={props.likePost} key={index} post={el}/>
            })}
        </div>
    )
}

let mapStateToProps = (state: any) => {
    return {
        posts: state.post.posts,
        error: state.post.error,
        loading: state.post.loading
    }
}

let PostsContainer = connect(mapStateToProps, {
    fetchPosts,
    likePost,
    loadComments,
})(Posts);

export default PostsContainer;
