import React from "react"
import Post from "./Post";
import Repost from "./Repost";
//посты

function Posts(){
    return (
        <div className="posts">
            <Post/>
            <Repost/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>

        </div>
    )
}
export default Posts;
