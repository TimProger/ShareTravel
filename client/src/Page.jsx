import React from 'react';
import './App.css';
import Menu from "./components/Menu";
import Posts from "./components/Posts";
//страница
function Page() {
    return (
        <div className="page">
            <div className="page__body">
                <div className="columns">
                    <div className="columns__item1">
                        <Menu/>
                    </div>
                    <div className="columns__item2">
                        <Posts/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;
