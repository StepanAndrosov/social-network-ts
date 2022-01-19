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
    },
    login(email: string, password: string, rememberMe: boolean = false){
        return instance.post(`auth/login`, {email, password, rememberMe})
            .then(response => response.data)
    },
    logout(){
        return instance.delete(`auth/login`)
            .then(response => response.data)
    },
}

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    follow(userId: number) {
        return instance.post(`follow/${userId}`)
            .then(response => response.data)
    },
    unFollow(userId: number) {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data)
    },
    getProfile(userId: string | undefined){
        console.warn('Obsolete method. Please use profileAPI object')
        return profileAPI.getProfile(userId)
    }
}

export const profileAPI = {
    getProfile(userId: string | undefined){
        return instance.get(`profile/${userId}`)
            .then(response => response.data)
    },
    getStatus(userId: string | undefined){
        return instance.get(`profile/status/${userId}`)
            .then(response => response.data)
    },
    updateStatus(status: string | null){
        return instance.put(`profile/status`, {status})
            .then(response => response.data)
    }
}
