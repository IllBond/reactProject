const GETERROR = 'GETERROR';
const DELETEERROR = 'DELETEERROR';

let initialState = {
    myError: false,
};

export let errorReducer = (state = initialState, action) => {
    switch (action.type) {
        case GETERROR:
            return {
                ...state, myError: action.myError
            };
        case DELETEERROR:
            return {
                ...state, myError: false
            };
        default:
            return state
    }
};


export const setError = (error) =>
    ({
        type: GETERROR,
        myError: error
    });

export const unmountError = () =>
    ({
        type: DELETEERROR,
    });

export const setErrorThunk = (error) => (dispatch) => {
    if (error){
        dispatch(setError(error));

        setTimeout(()=>{
            dispatch(unmountError())
        }, 5000)
    }


    };


