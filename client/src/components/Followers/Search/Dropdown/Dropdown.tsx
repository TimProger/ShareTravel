import React from "react";
import './Dropdown.css'
import { IDropdownProps } from '../../../../types/searchType';
import { NavLink } from 'react-router-dom';

const Dropdown: React.FC<IDropdownProps> = (props) => {

    return (
        <NavLink to={'/user/'+props.user.login.uuid+'/?page='+props.user.page} className={props.theme === 'light' ? "element element-light" : "element element-dark"}>
                <img className="follower-image elementImage" alt={props.user.name.first + props.user.name.last + "profile picture"} src={props.user.picture.medium || "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"}/>
                <p>{props.user.name.first} {props.user.name.last}</p>
        </NavLink>
    );
};


export default Dropdown ;
