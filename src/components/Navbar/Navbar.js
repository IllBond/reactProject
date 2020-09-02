import React from 'react';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <div>
                <NavLink  to='/profile'>Профиль</NavLink>
            </div>
            <div>
                <NavLink  to='/dialogs'>Сообщения</NavLink>
            </div>
            <div>
                <NavLink  to='/users'>Users</NavLink>
            </div>
            <div>
                <NavLink  to='/news'>Новости</NavLink>
            </div>
            <div>
                <NavLink  to='/mks'>МКС</NavLink>
            </div>
            <div>
                <NavLink  to='/gameSnake'>Игра</NavLink>
            </div>
            <div>
                <NavLink  to='/calculator'>Калькулятор</NavLink>
            </div>
            <div>
                <NavLink  to='/gen'>Ген.Алгоритм</NavLink>
            </div>
        </>
    );
}

export default Navbar;
