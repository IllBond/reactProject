import React from 'react';
import style from './smallPreloader.module.css'
import smallPreloaderImg from '../../media/prelaoderSmall.gif'


let SmallPreloader = () => {
    return <div className={style.div}>
            <img className={style.smallPreloader} src={smallPreloaderImg} alt=""/>
    </div>
}

export default SmallPreloader;
