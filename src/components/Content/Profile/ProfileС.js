import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    handleStateMainPreloader,
    THUNK_getUser,
    THUNK_GetUserStatus,
    THUNK_loadIMG,
    THUNK_setStatus,
    THUNK_Updatae_users_data
} from "../../../Redux/ProfileReducer";
import {withRouter} from "react-router-dom";
import {
    descriptionPreloader,
    getAuthId,
    getUserData,
    getUserStatus, MainPreloader
} from "../../../selectors/selectors";



class ProfileС extends React.Component {

    componentDidMount() {
        if (!this.props.match.params.userID) {

            if (this.props.id) {
                this.props.match.params.userID = this.props.id
                this.props.THUNK_getUser(this.props.match.params.userID);
                this.props.THUNK_GetUserStatus(this.props.match.params.userID);
            } else {
                this.props.history.push('/users')
            }
        } else {
            this.props.THUNK_getUser(this.props.match.params.userID);
            this.props.THUNK_GetUserStatus(this.props.match.params.userID);
        }


    }


    componentDidUpdate(prevProps) {
        if (this.props.match.params.userID !== prevProps.match.params.userID) {
            if (!this.props.match.params.userID) {
                let id = this.props.id;
                if (id) {
                    this.props.match.params.userID = id
                } else {
                    this.props.history.push('/users')
                }
            }
            this.props.THUNK_getUser(this.props.match.params.userID)
            this.props.THUNK_GetUserStatus(this.props.match.params.userID)
        }
    }

    render() {
        let isOwner = this.props.match.params.userID === this.props.id
        return <Profile
            isOwner={isOwner}
            THUNK_setStatus={this.props.THUNK_setStatus}
            THUNK_loadIMG={this.props.THUNK_loadIMG}
            THUNK_Updatae_users_data={this.props.THUNK_Updatae_users_data}
            status={this.props.status}
            state={this.props.userData}
            MainPreloader={this.props.MainPreloader}
            descriptionPreloader={this.props.descriptionPreloader}
           />

    };
}

const mapStateToProps = (state) => {
    return {
        userData: getUserData(state),
        status: getUserStatus(state),
        id: getAuthId(state),
        MainPreloader: MainPreloader(state),
        descriptionPreloader: descriptionPreloader(state),
    }
};


export default connect(mapStateToProps, {
    THUNK_getUser,
    THUNK_setStatus,
    THUNK_GetUserStatus,
    THUNK_loadIMG,
    THUNK_Updatae_users_data,handleStateMainPreloader})(withRouter(ProfileС));
