import React from "react"
import './MainPage.css';
import {Navigate, Route, Routes} from 'react-router-dom';
import Navbar from "../../Navigation/NavbarContainer";
import Posts from "../../Posts/PostsContainer";
import Followers from "../../Followers/FollowersContainer";
import Profile from "../../Profile/ProfileContainer";
import {useActions} from "../../../hooks/useActions";
import Exit from "../../Exit/Exit";
import NotFound from "../../NotFound/NotFound";

function MainPage(){
    const {logout} = useActions()

    return (
        <div className='wrapper'>
            <div className="navbar">
                <Navbar />
            </div>
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
    )

}

export default MainPage