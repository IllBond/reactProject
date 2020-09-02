import {APIGetStatus, APIGetUser, APILoadIMG, APISetStatus, APIUpdatae_users_data} from "../API/api";
import {stopSubmit} from "redux-form";

const SETPROFILE = 'SETPROFILE';
const GETSTATUS = "GETSTATUS";
const LOADIMG = "LOADIMG";
const MAIN_PRELOADER = "MAIN_PRELOADER";


let initialState = {
    userData: [],
    status: null,
    MainPreloader: false,
    descriptionPreloader: ''
};

let profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SETPROFILE:
            return {
                ...state, userData: action.data
            };

        case GETSTATUS:
            return {...state, status: action.status};
        case MAIN_PRELOADER:
            return {...state, MainPreloader: action.state, descriptionPreloader: action.text};
        case LOADIMG:
            return {...state, userData: {...state.userData, photos: action.data}};
        default:
            return state
    }
};


export const handleStateMainPreloader = (state, text = null) =>
    ({
        type: MAIN_PRELOADER,
        state: state,
        text: text
    });

export const setProfile = (data) => {
    return {
        type: SETPROFILE,
        data: data
    }
};

export const getStatus = (status) => {
    return {
        type: GETSTATUS,
        status: status
    }
};


export const loadIMG_AC = (data) =>
    ({
        type: LOADIMG,
        data: data
    });

export const THUNK_getUser = (id) => async (dispatch) => {
    dispatch(handleStateMainPreloader(true, 'Загружаю пользователя'));
    let responce = await APIGetUser(id);
    dispatch(setProfile(responce.data))
    dispatch(handleStateMainPreloader(false));
};

export const THUNK_loadIMG = (data) => async (dispatch) => {
    let responce = await APILoadIMG(data);
    dispatch(loadIMG_AC(responce.data.data.photos))
};

export const THUNK_setStatus = (status) => async (dispatch) => {
    let responce = await APISetStatus(status);
    if (responce.data.resultCode === 0) {
        dispatch(getStatus(status))
    }
};

export const THUNK_GetUserStatus = (status) => async (dispatch) => {
    try {
        let responce = await APIGetStatus(status);
        dispatch(getStatus(responce.data))
    } catch (error) {
        console.log(error)
    }
};

export const THUNK_Updatae_users_data = (data) => async (dispatch,getState) => {
    const userId = getState().auth.id;
    dispatch(handleStateMainPreloader(true, 'Обновляем пользовательские данные'));
    const responce = await APIUpdatae_users_data(data);
    if (responce.data.resultCode===0) {
        dispatch(THUNK_getUser(userId));
        dispatch(handleStateMainPreloader(false));
    } else {
        dispatch(stopSubmit('ProfileEditData', {_error: responce.data.messages[0]}));
        dispatch(handleStateMainPreloader(false));
        return Promise.reject(responce.data.messages[0]);
    }
};

export default profileReducer;