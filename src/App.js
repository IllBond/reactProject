import React, {Component} from 'react';

import './App.css';
import Logo from "./components/Logo/Logo";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Content from "./components/Content/Content";
import {THUNK_inital} from "./Redux/appReducer";
import {connect, Provider} from "react-redux";

import {HashRouter} from "react-router-dom";
import store from "./Redux/redux-store";
import {setErrorThunk} from "./Redux/errorReducer";



class App extends Component {

    catchAllError = (data)=>{
           this.props.setErrorThunk(data.reason.message || data.reason)

    };

    componentDidMount() {
        this.props.THUNK_inital()
        window.addEventListener("unhandledrejection", this.catchAllError)
    }

    componentWillUnmount() {
        this.props.THUNK_inital()
        window.removeEventListener("unhandledrejection", this.catchAllError)
    }

    render () {

        return (
            <div className='main-wrapper'>
                <div className='mainLogo'>
                    <Logo/>
                </div>
                <div className='mainHeader'>
                    <Header
                        links={['first', 'second', 'third']
                        }/>
                </div>
                <div className='mainNavbar'>
                    <Navbar/>
                </div>
                <div className='mainContent'>
                    <Content state={this.props.state}
                             dispatch={this.props.dispatch}
                    />
                </div>
            </div>

        );
    }
}


let mapStateToProps = (state) => {
    return {
        isInitialaized: state.initial.isInitialaized
    }
};


let AppContainer = connect(mapStateToProps,{
    THUNK_inital,
    setErrorThunk
})(App);


const AppX = (props) => {
    return <React.StrictMode>
        <HashRouter>
            <Provider store={store}>
                <AppContainer state={props.state}/>
            </Provider>
        </HashRouter>
    </React.StrictMode>
}

export default AppX