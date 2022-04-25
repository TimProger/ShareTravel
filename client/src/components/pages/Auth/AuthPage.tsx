import React from "react";
import './AuthPage.css'
import { Route, Routes, Navigate } from "react-router-dom";
import Auth from '../../Auth/AuthComponent/Auth/Auth'
import Register from '../../Auth/AuthComponent/Register/Register'

export default function AuthPage() {

    return (
        <div className="auth">
            <Routes>
                <Route path='*' element={<Navigate to="/auth" />} />
                <Route path='/auth' element={<Auth />} />
                <Route path='/registration' element={<Register />} />
            </Routes>
        </div>
    );
}