import React, {useState} from 'react';

import Status from "./Status/Status";
import style from "./Profile.module.css";
import {Field, reduxForm} from "redux-form";
import {Input_c} from "../../FORM/ErrorComponent";
import {required} from "../../FORM/validate";
import Preloader from "../../Common/Preloader";


const Profile = (props) => {

    let [editIMG, editMode] = useState(false);
    let editModeOn = () => {
        editMode(true)
    };
    let editModeOff = () => {
        editMode(false)
    };

    let loadIMG = (e) => {
        if (e.target.files.length) {
            props.THUNK_loadIMG(e.target.files[0]);
            editMode(false)
        }
    };

    let [editDataMode, editModeDataMode] = useState(false);
    let editDataModeOn = () => {
        editModeDataMode(true)
    };
    let editDataModeOff = () => {
        editModeDataMode(false)
    };

    const onSubmit = (formData) => {
        let rs = props.THUNK_Updatae_users_data(formData);

        rs.then(
            () => {
                editDataModeOff()
            })

    };

    return (
        <>
            <div>
                {props.MainPreloader ? <Preloader descriptionPreloader={props.descriptionPreloader} stopPreloader={props.handleStateMainPreloader}/> : ''}
            </div>
            {props.state.userId ?
                <div>
                    <img width='150'
                         alt='изображение пользователя'
                         src={props.state.photos.large ? props.state.photos.large : 'http://dl4.joxi.net/drive/2020/05/24/0028/3272/1866952/52/6f84020ab1.jpg'}
                    />
                    {props.isOwner && !editIMG ?
                        <div>
                            <input
                                onClick={editModeOn}
                                type="button"
                                value='Изменить фото'/> <span className={style.grey}> {'<'} Кликни что бы изменить статус</span>
                        </div> : ''}
                    {editIMG ? <div>
                        <input onChange={loadIMG}
                               type="file"/>
                        <input onClick={editModeOff}
                               type="button"
                               value='x'/>
                    </div> : ''}
                    <div>
                        <Status
                            THUNK_setStatus={props.THUNK_setStatus}
                            status={props.status}
                            isOwner={props.isOwner}
                        />
                    </div>

                    <div className={style.data}>
                        {/* eslint-disable-next-line react/jsx-pascal-case */}
                        {editDataMode ?
                            // eslint-disable-next-line react/jsx-pascal-case
                            <FormEditData_ReduxForm initialValues={props.state} onSubmit={onSubmit} props={props}/> :
                            <div onClick={props.isOwner ? editDataModeOn : null}>
                                {props.isOwner && <span className={style.grey}>Кликни что бы изменить статус</span>}
                                <div>ID: {props.state.userId}</div>
                                <div>Обо мне: {props.state.aboutMe}</div>
                                <div>{!props.state.lookingForAJob ? 'Не ищу работу' : 'Ищу работу'}</div>
                                <div>Доп. информация: {props.state.lookingForAJobDescription}</div>
                                <div>Псевдоним: {props.state.fullName}</div>
                                <div className={style.contacts}>
                                    <h3>Контакты</h3>
                                    {Object.keys(props.state.contacts).map(item =>
                                        <div key={item}>{item + ": " + props.state.contacts[item]}</div>
                                    )}
                                </div>
                            </div>}

                    </div>
                </div>
                : null}
        </>
    );
}


let FormEditData = (props) => {

    return <form onSubmit={props.handleSubmit}>
       <span className={props.error ? style.error : ''}>
           {props.error}
       </span>
        <div>ID: {props.props.state.userId}</div>
        Обо мне:
        <Field name="aboutMe" component={Input_c} type="text" placeholder="aboutMe"/>
        <div>Вы ищите работу?
            <Field name="lookingForAJob" component={'select'}>
                <option value={true}>Да</option>
                <option value={false}>Нет</option>
            </Field>
        </div>
        <div>Доп. информация:
            <Field name="lookingForAJobDescription" component={Input_c} type="text"
                   placeholder="lookingForAJobDescription"/>
        </div>
        <div>Псевдоним:<Field name="fullName" validate={[required]} component={Input_c} type="text"
                              placeholder="fullName"/></div>

        <div className={style.contacts}>
            <h3>Контакты</h3>
            {Object.keys(props.props.state.contacts).map(item =>
                <div key={'contacts.' + item}>{item + ": "}
                    <Field  name={'contacts.' + item} component={Input_c} type="text" placeholder={item}/>
                </div>
            )}
        </div>
        <button>Сохранить</button>
    </form>
};

    let FormEditData_ReduxForm = reduxForm({form: 'ProfileEditData'})(FormEditData);

export default Profile;
