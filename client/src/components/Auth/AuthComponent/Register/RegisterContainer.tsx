import React from "react";
import Register from "./Register";
import {useActions} from "../../../../hooks/useActions";
import {useTypedSelector} from "../../../../hooks/useTypedSelector";

export default function RegisterContainer() {
    const {register} = useActions()
    const {theme} = useTypedSelector(state => state.theme)
    const {error} = useTypedSelector(state => state.auth)
    return <Register
                register={register}
                theme={theme}
                error={error}
    />;
}
