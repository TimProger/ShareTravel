import React from 'react';
import {Navigate} from "react-router-dom";

export const WithAuthRedirect = (Component: React.FC) => {
    class RedirectComponent extends React.Component<any, any> {
        render(){
            if(!this.props.isAuth){
                return <Navigate to="/auth" />
            }
            return <Component />
        }
    }
    return RedirectComponent
};
