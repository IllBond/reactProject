import React from 'react';
import style from './User.module.css'
import {NavLink} from "react-router-dom";

const User = (props) => {
    return (
        <NavLink to={`/dialogs/${props.id}`} className={style.user +' '+ style.active}>
            {props.name}
        </NavLink>
    );
}

export default User;
