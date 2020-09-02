import React, {Component} from 'react';
import style from './Preloader.module.css'


class Preloader extends Component {
    state = {
        time: 0
    };

    updtaeTime (){
        setInterval(()=>{
            this.setState({
                time: this.state.time+1
            })
        },1000)
    }

    componentDidMount() {
        this.updtaeTime()
    }


    render() {

        return <div className={style.preloader}>
            <div>
                {this.props.descriptionPreloader?<div>{this.props.descriptionPreloader}...</div>:''}
                <div>{this.state.time}
                    <div>Секунд</div>
                    {this.state.time>6 ?<div>К сожалению сервер долго отвечает или у вас нет интернета. Можете попробовать дождаться конца загрузки или попробовать <button onClick={()=>{
                        this.props.stopPreloader(false)}
                    }>закрыть</button> окно с загрузкой и запустить другую страницу</div>:''}
                </div>
            </div>

        </div>
    }
}

export default Preloader;
