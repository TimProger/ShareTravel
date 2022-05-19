import React from "react";
import './AuthPage.css'
import { Route, Routes, Navigate } from "react-router-dom";
import Auth from '../../Auth/AuthComponent/Auth/AuthContainer'
import Register from '../../Auth/AuthComponent/Register/RegisterContainer'

export default function AuthPage(props: {theme: string}) {

    return (
        <div className={props.theme === 'light' ? 'auth-container auth-container-light' : 'auth-container auth-container-dark'}>
            <div className="auth">
                <Routes>
                    <Route path='*' element={<Navigate to="/auth" />} />
                    <Route path='/auth' element={<Auth />} />
                    <Route path='/registration' element={<Register />} />
                </Routes>
        </div>
    </div>
    );
}
