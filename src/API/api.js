import * as axios from "axios";

let instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": '3a590ed1-1993-437f-aa3b-01d103549889'
    }
});

export let APIUnfollow = (id) => {
    return instance.delete(`follow/${id}`)
};

export let APIFollow = (id) => {
    return instance.post(`follow/${id}`)
};
export let APIFistGetUsers = (count, currentPage) => {
    return instance.get(`users?count=${count}&page=${currentPage}`)
};

export let APIGetUsers = (count, number) => {
    return instance.get(`users?count=${count}&page=${number}`)
};

export let APIGetUser = (id) => {
    return instance.get(`profile/` + id)
};

export let APISetStatus = (status) => {
    return instance.put(`profile/status/`, {status: status})
};

export let APIGetStatus = (id) => {
    return instance.get(`profile/status/${id}`)
};

export let APIAuth = () => {
    return instance.get(`auth/me`)
};

export let APIAuth_login = (email, password, rememberMe, captcha) => {
    return instance.post(`auth/login`, {email, password, rememberMe, captcha})
};

export let APIAuth_logOut = () => {
    return instance.delete(`auth/login`)
};

export let APILoadIMG = (file) => {
    const formData = new FormData();
    formData.append("image", file)
    return instance.put(`profile/photo`, formData, {
        headers: {
            "Content-Type": 'multipart/form-data'
        }
    })
};

export let APIUpdatae_users_data = (data) => {
    return instance.put(`profile`, data)
};

export let APIGet_Captcha = () => {
    return instance.get(`security/get-captcha-url`)
};

export let API_News = () => {
    // только localhost
    // return axios.get('https://newsapi.org/v2/top-headlines?country=ua&apiKey=8fc9533cea184cbd8aca3f63b7d3c68b')

    // фейковый api
    return axios.get('https://my-json-server.typicode.com/IllBond/API_news/db')
}

