import React from 'react'
import style from './Login.module.css'
import {reduxForm, Field, InjectedFormProps} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {loginTC} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../redux/redux-store";
import errorStyle from "../../components/common/FormsControls/FormControls.module.css"

type LoginFormType = {
    email: string
    password: string
    rememberMe: boolean
    captchaUrl: null | string
}

type OwnPropsType = {
    captchaUrl: string | null
}

const LoginForm: React.FC<InjectedFormProps<LoginFormType, OwnPropsType> & OwnPropsType> = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={style.Login}>
            <div className={style.InputTextBlock}>
                <Field type={'text'} component={Input} validate={[required]} name={'email'} placeholder={'Email'}/>
            </div>
            <div className={style.InputTextBlock}>
                <Field type={'text'} component={Input} validate={[required]} name={'password'}
                       placeholder={'Password'}/>
            </div>
            <Field id={'rememberMe'} component={'input'} name={'rememberMe'} type={'checkbox'}/> <label
            htmlFor={'rememberMe'}>remember me</label>
            {
                props.captchaUrl && <img src={props.captchaUrl} alt="captcha"/>
            }
            {
                props.error &&
                <div className={errorStyle.summaryError}>
                    {props.error}
                </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}
export const LoginReduxForm = reduxForm<LoginFormType, OwnPropsType>({
    form: 'login'
})(LoginForm)

const Login: React.FC<MapDispatchType & MapStateType> = (props) => {

    const onSubmit = (formData: LoginFormType) => {
        props.loginTC(formData.email, formData.password, formData.rememberMe, formData.captchaUrl)
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>
    )
}

type MapStateType = {
    captchaUrl: null | string
    isAuth: boolean
}
type MapDispatchType = {
    loginTC: (email: string, password: string, rememberMe: boolean, captchaUrl: string | null) => void
}

const mapStateToProps = (state: AppStateType): MapStateType => {
    return {
        captchaUrl: state.auth.captchaUrl,
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {loginTC})(Login)
