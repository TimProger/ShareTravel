import React from 'react';

const Auth = () => {

    function setCookie(): void{
        document.cookie = "auth=true; max-age=60";
    }

    return (
        <div>
            <button onClick={()=>setCookie()}>Авторизация</button>
        </div>
    );
};

export default Auth;