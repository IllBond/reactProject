import React from "react";
import style from './ErrorComponent.module.css';

export let Input_c = ({meta, input, ...props}) => {

    const error = meta.error && meta.touched;

    return <div>
        <input {...input} {...props} className={error ? style.red_border : ''}/>
        <span className={error ? style.red_color : ''}>{error ? meta.error : ''}</span>
    </div>
};




export let Textarea_c = ({meta, input, ...props}) => {

    const error = meta.error && meta.touched;

    return <div>
        <textarea {...input} {...props}  className={error ? style.red_border : ''} />
       <div> <span className={error ? style.red_color : ''}>{error ? meta.error : ''}</span> </div>
    </div>
};