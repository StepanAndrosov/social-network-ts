import axios from "axios";
import {ResponseType, AuthDataType, UserResponseType, ProfilePhotosType, ProfileType} from "./types";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "ac5021a6-6592-4dfc-bd91-07a05b477711"
    }
})

export const authAPI = {
    authMe() {
        return instance.get<ResponseType<AuthDataType>>(`auth/me`).then(res => res.data)
    },
    login(email: string, password: string, rememberMe: boolean = false) {
        return instance.post<ResponseType<{ userId: number }>>(`auth/login`, {email, password, rememberMe})
            .then(res => res.data)
    },
    logout() {
        return instance.delete<ResponseType<{}>>(`auth/login`)
            .then(res => res.data)
    },
}

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get<UserResponseType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data)
    },
    follow(userId: number) {
        return instance.post<ResponseType<{}>>(`follow/${userId}`)
            .then(res => res.data)
    },
    unFollow(userId: number) {
        return instance.delete<ResponseType<{}>>(`follow/${userId}`)
            .then(res => res.data)
    }
}
export const securityAPI = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`)
            .then(res => res.data)
    }
}

export const profileAPI = {
    getProfile(userId: number | null) {
        return instance.get<ProfileType>(`profile/${userId}`)
            .then(res => res.data)
    },
    getStatus(userId: number | undefined) {
        return instance.get<string | null>(`profile/status/${userId}`)
            .then(res => res.data)
    },
    updateStatus(status: string | null) {
        return instance.put<ResponseType<{}>>(`profile/status`, {status})
            .then(res => res.data)
    },
    savePhoto(file: File) {
        const formData = new FormData()
        formData.append('image', file)
        return instance.put<ResponseType<ProfilePhotosType>>('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(res => res.data)
    },
    saveProfile(profile: ProfileType) {
        return instance.put<ResponseType<ProfileType>>('profile', profile)
            .then(res => res.data)
    },
}
