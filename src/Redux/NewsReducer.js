import {API_News} from "../API/api";

const GETNEWS = 'GETNEWS';

let initialState = {
    news: []
};

export let newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GETNEWS:
            return {
                ...state, news: action.news
            };
        default:
            return state
    }
};

export const getNews = (news) => {
    return {
        type: GETNEWS,
        news: news
    }
};

export const THUNK_getNews = () => async (dispatch) => {

    let responce = await API_News();

    dispatch(getNews(responce.data))
};