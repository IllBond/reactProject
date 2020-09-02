import React from 'react';
import style from './Dialogs.module.css'
import User from "./User/User";
import DialogsContainer from "./Message/MessageContainer";


const Dialogs = (props) => {
    return (
        <div className={style.dialogs}>
            <div>
                {props.users.map(item=>{return <User id={item.id} key={item.id} name={item.name}/>})}
            </div>
                <DialogsContainer message={props.message} textMessage={props.textMessage} dispatch={props.dispatch}/>
        </div>
    );
}

export default Dialogs;
