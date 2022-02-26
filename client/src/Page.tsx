import React from 'react';
import './App.css';
import Menu from "./components/Menu";
import Posts from "./components/Posts";
//страница
function Page(props: { user: { name: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; secname: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }; }) {
    return (
        <div className="page">
            <div className="page__body">
                <div className="columns">
                    <div className="columns__item1">
                        <Menu user={props.user}/>
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
