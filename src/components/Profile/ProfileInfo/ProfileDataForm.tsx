import React from "react";
import style from "./ProfileInfo.module.scss";
import {Input, Textarea} from "../../common/FormsControls/FormsControls";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {MaxLengthCreator} from "../../../utils/validators/validators";

export type ProfileDataFormType = {
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    aboutMe: string
}

const maxLength = MaxLengthCreator(50)

export const ProfileDataForm: React.FC<InjectedFormProps<ProfileDataFormType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            {
                <div>
                    <button onClick={props.handleSubmit}>
                        save
                    </button>
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
                {}
            </div>
        </form>
    )
}

export const ReduxProfileDataForm = reduxForm<ProfileDataFormType>({
    form: 'edit-profile'
})(ProfileDataForm)
