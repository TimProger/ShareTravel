import React from "react"
import {Route, Routes} from 'react-router-dom';
import Navbar from "./components/Navigation/Navbar";
import Posts from "./components/Posts/Posts";
import './App.css';
import Followers from "./components/Followers/Followers";
import Profile from "./components/Profile/Profile";

function App(){

    return (
        <div className='wrapper'>
            <div className="navbar">
                <Navbar />
            </div>
            <div className="page">
                <Routes>
                    <Route path='/' element={<Posts />} />
                    <Route path='/friends' element={<Followers />} />
                    <Route path='/user/:id' element={<Profile />} />
                    {/*<Route path='/dialogs/*' element={<Dialogs />} />*/}
                </Routes>
            </div>
        </div>
    )
}

export default App;