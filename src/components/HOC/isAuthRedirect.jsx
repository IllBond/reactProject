import React from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";



export const withAuthRedirect = (Component) => {

    let mapStateToProps  = (state) => ({
        isAuth: state.auth.isAuth
    });

    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) {
                return <Redirect to={'/authorized'}/>
            }
            return <Component {...this.props}/>
        }
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToProps)(RedirectComponent)

    return ConnectedAuthRedirectComponent
}