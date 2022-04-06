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
}

const LoginForm: React.FC<InjectedFormProps<LoginFormType>> = (props) => {
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

            {props.error && <div className={errorStyle.summaryError}>
                {props.error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}
export const LoginReduxForm = reduxForm<LoginFormType>({
    form: 'login'
})(LoginForm)

type LoginType = {
    loginTC: (email: string, password: string, rememberMe: boolean) => void
}


const Login: React.FC<LoginType> = ({loginTC}, props) => {
    const onSubmit = (formData: LoginFormType) => {
        loginTC(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}
type MapStateType = {
    isAuth: boolean
}
const mapStateToProps = (state: AppStateType): MapStateType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {loginTC})(Login)