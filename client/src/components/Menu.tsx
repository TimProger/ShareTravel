import React from "react";
import * as PropTypes from "prop-types";

import { BsChatDots } from "react-icons/bs";
import { IoNewspaperOutline,IoHelpSharp,IoMapOutline} from "react-icons/io5";
import { AiOutlineHeart, AiOutlineStar} from "react-icons/ai";
import { FiSettings } from "react-icons/fi";


function Menu(props: { user: { name: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; secname: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }; }){

    return (
        <div className="Menu">
            <p className="logo">ShareTravel</p>
            <a href="" className='profile'>
                <p className='nam'>

                    {props.user.name} <br/> {props.user.secname}
                </p>
               <img className="profileIMG" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"  alt="" />
            </a>


            <div className='menu_links'>
                <a href=''>
                    <BsChatDots className="icons" />
                    <p className="menu_text">Чат</p>
                </a>
                <a href=''>
                    <IoMapOutline className="icons" />
                    <p className="menu_text">Карта</p>
                </a>
                <a href=''>
                    <IoNewspaperOutline className="icons" />
                    <p className="menu_text">Новости</p>
                </a>
                <a href=''>
                    <AiOutlineHeart className="icons" />
                    <p className="menu_text">Для вас</p>
                </a>
                <a href=''>
                    <AiOutlineStar className="icons" />
                    <p className="menu_text">Избранное</p>
                </a>

                <div className="line"/>
                <a href=''>
                    <FiSettings className="icons" />
                    <p className="menu_text">Настройки</p>

                </a>

                <a href=''>
                    <IoHelpSharp className="icons" />
                    <p className="menu_text">Помощь</p>

                </a>


            </div>

        </div>
    )
}
export default Menu