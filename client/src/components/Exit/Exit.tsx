import React, {useEffect} from 'react';
import {useActions} from "../../hooks/useActions";

const Exit = () => {
    const {logout} = useActions()

    useEffect(()=>{
        logout()
    })

    return (
        <div>Происходит выход из аккаунта</div>
    );
};

export default Exit;