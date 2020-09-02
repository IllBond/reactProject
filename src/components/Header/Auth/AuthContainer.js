import React, {Component} from 'react';
import Auth from "./Auth";
import {connect} from "react-redux";

class AuthContainer extends Component {

    render() {
        return (
           <Auth {...this.props}/>
        );
    }
}

const mapStateToProps = (state)=>{
    return {
        id: state.auth.id,
        email: state.auth.email,
        login: state.auth.login,
        isAuth: state.auth.isAuth,
        }
};




export default connect(mapStateToProps,null)(AuthContainer);
