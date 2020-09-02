import {addMessageAC} from "../../../../Redux/dialogReducer";
import Message from "./Message";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../../HOC/isAuthRedirect";
import {compose} from "redux";


const mapStateToProps = (state) => {
        return {
        textMessage: state.dialogs.textMessage,
        message: state.dialogs.message
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        SendMessage: (message) => {
            dispatch(addMessageAC(message))
        },
    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps)
)(Message)
