import React from "react";
import { Route, Navigate } from "react-router-dom";
import {useTypedSelector} from "../../hooks/useTypedSelector";

export const ProtectedRoute = ({component: Component,...rest}: any) => {
    const {isAuth} = useTypedSelector(state => state.auth)
    return (
        <Route
            {...rest}
            render={(props: any) => {
                if (isAuth) {
                    return <Component {...props} />;
                } else {
                    return (
                        <Navigate to={'/auth'}/>
                    );
                }
            }}
        />
    );
};
