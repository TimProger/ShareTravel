import React from "react"
import Menu from "./components/Menu";
import Posts from "./components/Posts";
import Page from "./Page";
import './App.css';

const user = {
    name: 'Эллин',
    secname: 'Пэйдж'
}

//Главный файл для запускв
function App(){
    return (
        <div>
            {/*<Menu/>*/}
            {/*<Posts/>*/}
            <Page user={user}/>
        </div>
    )
}
export default App;
