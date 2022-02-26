import React from "react"
import Post from "./Post";
import Repost from "./Repost";
//посты

function Posts(){
    const users = [
        {
            name: "Мшк Фреде",
            text: "Ъ"
        },
        {
            name: "Марк Цукр",
            text: "Bruh"
        },
        {
            name: "Наруто Удзумаки",
            text: "Cringe"
        },

    ]
    return (
        <div className="posts">
            {users.map((el, index)=>{
                return <Post key={index} user={el}/>
            })}
        </div>
    )
}

export default Posts;
