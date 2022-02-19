import React from "react";
import * as PropTypes from "prop-types";




function Menu(){
    return (
        <div className="Menu">
            <p className="logo">ShareTravel</p>
            <a href="" className='profile'>
                <p className='nam'>
                    Эллин <br/> Пейдж
                </p>
               <img className="profileIMG" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"  alt="" />

            </a>


           <p>Чат</p>
            <p>Карта</p>
            <p>Новости</p>
            <p>Для вас</p>
            <p>Избранное</p>
            <div className="line"/>
            <p>Настройки</p>
            <p>Помощь</p>
        </div>
    )
}
export default Menu