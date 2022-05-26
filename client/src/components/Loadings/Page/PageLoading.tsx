import React from 'react';
import './PageLoading.css'
import {useTypedSelector} from "../../../hooks/useTypedSelector";

// Loading by MattIn4D from Codepen.io

const PageLoading = () => {
    const {theme} = useTypedSelector(state => state.theme)

    return (
            <div className={theme === 'light' ? "page-container page-container-light" : "page-container page-container-dark"}>
                <div className="loading">Loading&#8230;</div>
            </div>
    );
};

export default PageLoading;