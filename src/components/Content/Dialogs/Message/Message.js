import React, {Component} from 'react';
import style from './Message.module.css'
import {Field, reduxForm} from "redux-form";
import {required} from "../../../FORM/validate";
import {Input_c} from "../../../FORM/ErrorComponent";

let Form = (props) => {
    return  <form onSubmit={props.handleSubmit}>
        <div>
            <Field validate={[required]} placeholder='Введие сообщение' component={Input_c} type='text' name={'message'}/>
        </div>
        <div>
            <button>Отправить</button>
        </div>
    </form>
};

let Reduxform = reduxForm({form:'message'})(Form);


class Message extends Component {

    render() {
        let mapMessages = this.props.message.map((item,index) => {
            return <div key={'ind'+index} className={style.dialog + ' ' + (item.address ? '' : style.dialogYou)}>
                <div className={style.dialogPhoto}><img alt='изображенеи пользователя' src={item.photo}/></div>
                <div className={style.dialogName}>{item.name}</div>
                <div className={style.dialogDate}>{item.time}</div>
                <div className={style.dialogMessage}>{item.message}</div>
            </div>
        });

        return (
            <div className={style.message}>
                <div className={style.messageWindow}>
                    {mapMessages}
                </div>
                <div className={style.newMessage}>
                    <Reduxform onSubmit={(data) => {
                        this.props.SendMessage(data.message)
                    }}/>
                </div>
            </div>
        );
    }
}

export default Message;
