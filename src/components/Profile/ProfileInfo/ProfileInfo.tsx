import style from "./ProfileInfo.module.scss"
import React, {ChangeEvent, useState} from "react"
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileInfoType} from "../Profile";
import {ProfileStatus} from "./ProfileStatus/ProfileStatus";
import ProfileImg from "../../../accets/images/profileImg.jpg"
import {KeyofContactsType} from "../../../redux/profile-reducer";
import {ProfileType} from "../../../api/api";
import {ProfileDataFormType, ProfileEditForm} from "./ProfileDataForm";

export const ProfileInfo: React.FC<ProfileInfoType> = (props) => {

    const [editMode, setEditMode] = useState<boolean>(false)

    if (!props.profile) {
        return <Preloader/>
    }
    const onPhotoSelected = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            props.savePhoto(event.target.files[0])
        }
    }

    const onSubmit = (formData: ProfileDataFormType) => {
        props.saveProfile({
            ...formData,
            userId: props.profile.userId,
            photos: props.profile.photos
        }).then(
            () => setEditMode(false)
        )
    }

    return (
        <div className={style.ProfileInfo}>
            <img className={style.profilePhoto}
                 src={props.profile.photos.large || ProfileImg}
                 alt={props.profile.fullName}
            />
            <div>
                {props.isOwner && <input type={"file"} onChange={onPhotoSelected}/>}
            </div>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            {
                editMode
                    ? <ProfileEditForm
                        initialValues={props.profile}
                        onSubmit={onSubmit}
                    />
                    : <ProfileData
                        profile={props.profile}
                        isOwner={props.isOwner}
                        toEditMode={() => setEditMode(true)}
                    />
            }
        </div>
    )
}

type PropsContactType = {
    contactTitle: string
    value: any
}

type PropsProfileDataType = {
    profile: ProfileType
    isOwner?: boolean
    toEditMode: () => void
}

const ProfileData: React.FC<PropsProfileDataType> = ({profile, isOwner, toEditMode}) => {
    return (
        <div>
            {
                isOwner &&
                <div>
                    <button onClick={toEditMode}>
                        edit
                    </button>
                </div>
            }
            <div className={style.profileName}>
                <span>My name: <b>{profile.fullName}</b></span>
            </div>
            <div>
                <b>Looking for a job:</b> {profile.lookingForAJob ? "yes" : "no"}
            </div>
            {
                profile.lookingForAJob &&
                <div>
                    <b>My skills:</b>{profile.lookingForAJobDescription}
                </div>
            }
            <div>
                <b>About me:</b> {profile.aboutMe}
            </div>
            <div className={style.myContacts}>
                My contacts:
                {
                    Object.keys(profile.contacts).map((key) => (
                            <Contact
                                key={key}
                                contactTitle={key}
                                value={profile.contacts[key as KeyofContactsType]}
                            />
                        )
                    )
                }
            </div>
        </div>

    )
}

const Contact: React.FC<PropsContactType> = (props) => {
    return (
        <div className={style.Contact}>
            <span className={style.ContactTitle}>{props.contactTitle}: </span>
            <span className={style.ContactValue}>{props.value}</span>
        </div>
    )
}
