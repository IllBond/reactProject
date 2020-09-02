import React, {useEffect, useState} from 'react';
import style from './Status.module.css'
import {Field, reduxForm} from "redux-form";
import {Input_c} from "../../../FORM/ErrorComponent";
import {mexLength, required} from "../../../FORM/validate";

const mexLength_varrible = mexLength(30);

const InputForm = (props) => {

    return <form className={style.ib} onSubmit={props.handleSubmit}>

        <Field
            component={Input_c}
            validate={[required,mexLength_varrible]}
            autoFocus={true}
            status={props.status}
            name={'status'}/>
            <button>Отправить</button>
    </form>

}

const InputReduxForm = reduxForm({form: 'status'})(InputForm)



let Status = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, editStatus] = useState(props.status)

    useEffect(() => {
        editStatus(props.status)
    }, [props.status])

    let onEditMode = () => {
        setEditMode(true)
    };

    let offEditMode = (status) => {
        setEditMode(false);
        props.THUNK_setStatus(status)
    };


    return (
        <>
            <div>
                <div>
                    {
                        !editMode ?
                            (
                                <>
                                    {
                                        props.isOwner ?
                                            <>
                                            <span className={style.status} onClick={onEditMode}>{
                                                status ? status :
                                                    <span className={style.grey}>изменить статус</span>
                                            }</span>
                                                <span className={style.grey}> {'<'} Кликни что бы изменить статус</span>
                                            </> :
                                            <span className={style.status}>{
                                                status ? status :
                                                    <span className={style.grey}>статус отсутствует</span>
                                            }</span>
                                    }
                                </>
                            ) :
                            <>
                                <InputReduxForm

                                    initialValues={{status:status}}
                                    onSubmit={(data) => {
                                        offEditMode(data.status)

                                    }}
                                /></>

                    }
                </div>
            </div>
        </>
    );
}
//<span>Кликни что бы изменить статус</span>
export default Status;
