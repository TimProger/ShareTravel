import React from "react";
import {useActions} from "../../../../hooks/useActions";
import Auth from "./Auth";
import {useTypedSelector} from "../../../../hooks/useTypedSelector";



export default function AuthContainer() {
    const {theme} = useTypedSelector(state => state.theme)
    const {login} = useActions()
    return <Auth login={login}  theme={theme}/>
}
