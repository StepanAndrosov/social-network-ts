import React, {FunctionComponent} from "react";
import style from "./ProfileInfo.module.scss";
import errorStyle from "../../../components/common/FormsControls/FormControls.module.css"
import {Input, Textarea} from "../../common/FormsControls/FormsControls";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {MaxLengthCreator} from "../../../utils/validators/validators";
import {ProfileType} from "../../../api/api";
import {AppStateType} from "../../../redux/redux-store";
import {connect} from "react-redux";

export type ProfileDataFormType = {
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    aboutMe: string
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
}

type Props = {
    profile: ProfileType
}

const maxLength = MaxLengthCreator(50)

const ProfileDataForm: FunctionComponent<Props & InjectedFormProps<ProfileDataFormType, Props>> =
    ({
         handleSubmit,
         profile,
         error
     }) => {
        return (
            <form onSubmit={handleSubmit}>
                {
                    <div>
                        <button onClick={handleSubmit}>
                            save
                        </button>
                    </div>
                }
                {
                    error
                    && <div className={errorStyle.summaryError}>
                        {error}
                    </div>
                }
                <div className={style.profileName}>
                <span>My name:
                <Field
                    type={'text'}
                    component={Input}
                    validate={[]}
                    name={'fullName'}
                    placeholder={'Full Name'}
                />
                </span>
                </div>
                <div>
                    <Field
                        id={'lookingForAJob'}
                        component={'input'}
                        name={'lookingForAJob'}
                        type={'checkbox'}
                    />
                    <label htmlFor={'lookingForAJob'}>Looking for a job</label>
                </div>

                <div>
                    <b>My skills:</b>
                    <Field
                        name={'lookingForAJobDescription'}
                        component={Textarea}
                        placeholder="My professional skills"
                        validate={[maxLength]}
                    />
                </div>

                <div>
                    <b>About me:</b>
                    <Field
                        name={'aboutMe'}
                        component={Textarea}
                        placeholder="About me"
                        validate={[maxLength]}
                    />
                </div>
                <div className={style.myContacts}>
                    My contacts:
                    {
                        Object.keys(profile.contacts).map((key) => (
                                <div className={style.Contact} key={key}>
                                    <span className={style.ContactTitle}>{key}:</span>
                                    <Field
                                        name={"contacts." + key}
                                        component={Input}
                                        placeholder={"my " + key}
                                        validate={[maxLength]}
                                    />
                                </div>

                            )
                        )
                    }
                    {
                        error
                        && <div className={errorStyle.summaryError}>
                            {error}
                        </div>
                    }
                </div>
            </form>
        )
    }

type MapStateToPropsType = {
    profile: ProfileType
}
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile
    }
}

export const ProfileEditForm = connect(mapStateToProps)(
    reduxForm<ProfileDataFormType, Props>({
        form: 'edit-profile'
    })(ProfileDataForm)
)


