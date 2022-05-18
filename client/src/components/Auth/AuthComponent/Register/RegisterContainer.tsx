import React from "react";
import Register from "./Register";
import {useActions} from "../../../../hooks/useActions";

export default function RegisterContainer() {
    const {register} = useActions()
    return <Register register={register}/>;
}
