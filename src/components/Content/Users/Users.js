import React from 'react';

import {NavLink} from "react-router-dom";
import SmallPreloader from "../../Common/smallPreloader";
import Preloader from "../../Common/Preloader";



let Users = (props) => {

    return <>
        <div>
            {props.MainPreloader ? <Preloader descriptionPreloader={props.descriptionPreloader} stopPreloader={props.handleStateMainPreloader}/> : ''}
        </div>
        <div>
         {props.users.map(u => {
                return <div key={u.id}>
                    <div>
                        <NavLink to={`/profile/${u.id}`}><img
                            alt='изображение пользователя'
                            src={u.photos.small ? u.photos.small : 'http://dl4.joxi.net/drive/2020/05/24/0028/3272/1866952/52/6f84020ab1.jpg'}
                            width='50'/></NavLink></div>
                    <div>{u.name}</div>
                    <div>{u.status ? u.status : 'Нет статуса'}</div>
                    <div>
                        {u.followed ? (
                            <>
                                <button disabled={props.preloaderUserId.some(item => item === u.id)} onClick={
                                    () => {props.THUNK_unfollow(u.id)}}>Отписаться
                                </button>
                                {props.preloaderUserId.some(item => item === u.id) ? <SmallPreloader/> : null}
                            </>) : (
                            <>
                                <button disabled={props.preloaderUserId.some(item => item === u.id)} onClick={
                                    () => {props.THUNK_follow(u.id)}
                                }>Подписаться
                                </button>
                                {props.preloaderUserId.some(item => item === u.id) ? <SmallPreloader/> : null}
                            </>)}
                    </div>
                    <hr/>
                </div>
            })}
        </div>
    </>
};
export default Users;
