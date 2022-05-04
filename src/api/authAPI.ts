import {AuthDataType, CaptchaCode, ResponseType, ResultCode} from "./types";
import {instance} from "./api";

export const authAPI = {
    authMe() {
        return instance.get<ResponseType<AuthDataType>>(`auth/me`).then(res => res.data)
    },
    login(email: string, password: string, rememberMe: boolean = false) {
        return instance.post<ResponseType<{ userId: number }, ResultCode | CaptchaCode>>(`auth/login`, {email, password, rememberMe})
            .then(res => res.data)
    },
    logout() {
        return instance.delete<ResponseType>(`auth/login`)
            .then(res => res.data)
    },
}
