import React from 'react';
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {THUNK_auth_logOut} from "../../../Redux/authReducer";

const Auth = (props) => {
    return (
        <div>
            <div>

            </div>
            {!props.isAuth ? <NavLink to={'/authorized'}>Авторизоваться</NavLink> : <span>Привет {props.login} | <span onClick={props.THUNK_auth_logOut}>X</span></span>}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps, {THUNK_auth_logOut,})(Auth);
