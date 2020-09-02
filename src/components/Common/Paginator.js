import React, {useState} from "react";
import style from "../Content/Users/Users.module.css";
import {NavLink} from "react-router-dom";


let Paginator = (props) => {

    let pagesCount = Math.ceil(props.totalCount / props.count);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let sizeOnePorion = 15;
    let SizeAllPortion = pagesCount / sizeOnePorion;
    let portion = [];
    for (let i = 1; i <= SizeAllPortion; i++) {
        portion.push(i)
    }

    let [PortionPage, setNewPortionPage] = useState(0)


    return <div className={style.paginator}>
        <div className={style.selected}>
            Воспользуйтесь прокруткой что бы получить доступ ко всем пользователям
        </div>
        <div>
            <input className={style.range} type="range" min="0" max={pages.length - sizeOnePorion} value={PortionPage}
                   onChange={(e) => {
                       setNewPortionPage(e.target.value)
                   }}/>
        </div>

        {PortionPage > 0 ? <abbr title="Воспользуйтесь полосй прокрутки">← </abbr> : ''}

        {pages.map(
            p => (Number(p) > +Number(PortionPage) && Number(p) <= Number(PortionPage) + Number(sizeOnePorion)) ? (p === props.currentPage) ?
                <span key={p} className={style.selected}>{p}</span> :
                <NavLink key={p} className={style.to} to={`/users/${p}`} onClick={() => {
                    props.setNewCurrentPage(p)
                }}>{p}</NavLink> : ''
        )}

        {PortionPage < pages.length - sizeOnePorion ? <abbr title="Воспользуйтесь полосй прокрутки"> →</abbr> : ''}

    </div>
}

export default Paginator