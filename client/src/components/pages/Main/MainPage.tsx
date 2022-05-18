import React from "react"
import './MainPage.css';
import {Navigate, Route, Routes} from 'react-router-dom';
import Navbar from "../../Navigation/NavbarContainer";
import Posts from "../../Posts/PostsContainer";
import Followers from "../../Followers/FollowersContainer";
import Profile from "../../Profile/ProfileContainer";
import Exit from "../../Exit/Exit";
import NotFound from "../../NotFound/NotFound";

function MainPage(props: {theme: string}){

    return (
        <div className={props.theme === 'light' ? 'wrapper-container wrapper-container-light' : 'wrapper-container wrapper-container-dark'}>
            <div className='wrapper'>
                <Navbar />
                <div className="page">
                    <Routes>
                        <Route path='/auth' element={<Navigate to="/" />} />
                        <Route path='/registration' element={<Navigate to="/" />} />
                        <Route path='*' element={<NotFound />} />
                        <Route path='/' element={<Posts />} />
                        <Route path='/followers' element={<Followers />} />
                        <Route path='/user/:id/*' element={<Profile />} />
                        <Route path='/exit' element={<Exit />} />
                        {/*<Route path='/dialogs/*' element={<Dialogs />} />*/}
                    </Routes>
                </div>
            </div>
        </div>
    )

}

export default MainPage