import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "ac5021a6-6592-4dfc-bd91-07a05b477711"
    }
})

export const authAPI = {
    authMe(){
        return instance.get(`auth/me`)
            .then(response => response.data)
    }
}

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
            .then(response => response.data)
    },
    unFollow(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data)
    },
    getProfile(userId){
        return instance.get(`profile/${userId}`)
            .then(response => response.data)
    }
}
