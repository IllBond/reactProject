import React, {Component} from 'react';
import {connect} from "react-redux";
import {THUNK_getNews} from "../../../Redux/NewsReducer";
import style from "./News.module.css"

let News = (props) => {
    return (
        <>
            <h3 className={style.red}>(На данной странице используестя не настоящее api т.к тестовая версия работает
                только на localhost)
            </h3>
            <div className={style.news_wrapper}>
                {props.news.articles ? props.news.articles.map((item,i) =>
                    <div key={'it'+i} className={style.news_web}>
                        <div>
                            <div className={style.meta}><span className={style.author}>Автор: <span>{item.author}</span></span>
                                <span className={style.date}>Дата: <span>{item.publishedAt}</span></span></div>
                            <div><img className={style.img} src={item.urlToImage} alt="картинка"/></div>
                            <div className={style.title}>{item.title} </div>
                            <div className={style.description}>{item.description} </div>
                        </div>
                        <div>
                            {/* eslint-disable-next-line react/jsx-no-target-blank */}
                            <div><a className={style.link} target='_blank' href={item.url}>Перейти</a></div>
                        </div>
                    </div>
                ) : ''}

            </div>
        </>
    )
};

class NewsContainer extends Component {

    componentDidMount() {
        this.props.THUNK_getNews()
    }

    render() {
        return <News news={this.props.news}/>
    }
}

const mapStatetoProps = (state) => {
    return {
        news: state.newsReducer.news
    }
}


export default connect(mapStatetoProps, {THUNK_getNews})(NewsContainer)
