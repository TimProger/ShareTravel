import React from "react"
import {Route, Routes} from 'react-router-dom';
import Navbar from "./components/Navigation/Navbar";
import Posts from "./components/Posts/Posts";
import './App.css';
import Followers from "./components/Followers/Followers";
import Profile from "./components/Profile/Profile";
import Auth from "./components/Auth/AuthComponent/Auth";

function App(){
    // Получение куки для аутентификации
    function getCookie(name: string) {
        let matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? (decodeURIComponent(matches[1])) : undefined;
    }
    return (
        <div className='wrapper'>
            {/* Проверка наличия куки */}
            {getCookie('auth') ?
                <>
                    <div className="navbar">
                        <Navbar />
                    </div>
                    <div className="page">
                        <Routes>
                            <Route path='/' element={<Posts />} />
                            <Route path='/followers' element={<Followers />} />
                            <Route path='/user/:id' element={<Profile />} />
                            {/*<Route path='/dialogs/*' element={<Dialogs />} />*/}
                        </Routes>
                    </div>
                </>
                :
                <Auth />
            }

        </div>
    )
}

export default App