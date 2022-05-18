import React from "react";
import {useActions} from "../../../../hooks/useActions";
import Auth from "./Auth";

export default function AuthContainer() {
    const {login} = useActions()
    return <Auth login={login}/>
}
