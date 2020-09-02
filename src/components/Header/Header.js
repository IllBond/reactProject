import React from 'react';
import style from './Header.module.css'
import Link from "./Link/Link";
import AuthContainer from "./Auth/AuthContainer";
import {connect} from "react-redux";

import {unmountError} from "../../Redux/errorReducer";


const Header = (props) => {

    return (
        <>
          <div className={style.grid}>

              {!props.myError ? <div className={`${style.content}` }>
                  {props.links.map(item => {
                      return <Link key={item} link={item}/>
                  })}

              </div> : <div className={`${style.content}` }>
                  <div className={style.error}>{props.myError} {<button onClick={props.unmountError}>X</button>}</div>
              </div>}
              <div>
                  <AuthContainer isNewPreloader />
              </div>
          </div>
        </>
    );
}

let mapStateToProps = (state) => {
    return {
        myError: state.errorReducer.myError,

    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        unmountError: () => {
            dispatch(unmountError())
        },

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header);
