import {createSelector} from "reselect";

let getUserDataSelector = (state) => {
    return {...state.profile.userData}
};

export let getUserData = createSelector(getUserDataSelector, (data)=>{
        //тут что угодно. К примеру массив который фильтруется функцией filter. Вовращает нвоый массив и соотетственно должен перересоваться state
        return {...data}
})


export let getUserStatus = (state) => {
    return state.profile.status
};


export let getAuthId = (state) => {
    return state.auth.id
};

export let MainPreloader = (state) => {
    return state.profile.MainPreloader
};

export let descriptionPreloader = (state) => {
    return state.profile.descriptionPreloader
};
