import {ProfilePhotosType, ProfileType, ResponseType} from "./types";
import {instance} from "./api";

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
        return instance.put<ResponseType>(`profile/status`, {status})
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
