import React from "react"
import './MainPage.css';
import MainPage from "./MainPage";
import {useActions} from "../../../hooks/useActions";

function MainPageContainer(){
    const {fetchPosts} = useActions()

    return (<MainPage fetchPosts={fetchPosts}/>)
}

export default MainPageContainer