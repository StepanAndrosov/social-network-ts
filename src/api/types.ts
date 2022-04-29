type ResponseType<D> = {
    resultCode: number,
    messages: Array<string>,
    data: D
}
type ProfileType = {
    aboutMe: string
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
    photos: ProfilePhotosType
}

type AuthDataType = {
    id: number
    email: string
    login: string
}
type ProfilePhotosType = {
    small: string
    large: string
}
type UserType = {
    followed: boolean
    id: number
    name: string
    photos: ProfilePhotosType
    status: null | string
    uniqueUrlName: null | string
}

type UserResponseType = {
    items: Array<UserType>
    totalCount: number
    error: null | string
}

export enum ResultCode {
    Success = 0,
    Error = 1,
}

export enum CaptchaCode {
    CaptchaIsRequired = 10
}

export type {
    ResponseType,
    AuthDataType,
    ProfileType,
    ProfilePhotosType,
    UserType,
    UserResponseType
}
