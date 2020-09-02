import {THUNK_auth} from "./authReducer";

const INIATAL = 'INIATAL';


let initialState = {
    isInitialaized: false,
};

export let initialaizedReducer = (state = initialState, action) => {
    switch (action.type) {
        case INIATAL:

            return {
                ...state, isInitialaized: true
            };
        default:
            return state
    }
};

export const inital = () => {
    return {type:INIATAL}
};


export const THUNK_inital = () => async (dispatch) => {
    await dispatch(THUNK_auth());
    dispatch(inital());
};
