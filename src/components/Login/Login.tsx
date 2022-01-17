import React from 'react'
import style from './Login.module.css'
import {reduxForm, Field, InjectedFormProps} from "redux-form";

type LoginFormType = {
    login: string
    password: string
    remember: boolean
}

const LoginForm: React.FC<InjectedFormProps<LoginFormType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={style.Login}>
            <div className={style.InputTextBlock}>
                <Field type={'text'} component={'input'} name={'login'} placeholder={'Login'}/>
            </div>
            <div className={style.InputTextBlock}>
                <Field type={'text'} component={'input'} name={'password'} placeholder={'Password'}/>
            </div>
            <div>
                <Field id={'remember'} component={'input'} name={'remember'} type={'checkbox'}/> <label htmlFor={'remember'}>remember me</label>
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}
export const LoginReduxForm = reduxForm<LoginFormType>({
    form: 'login'
})(LoginForm)

export const Login = () => {
    const onSubmit = (formData: LoginFormType) => {
        console.log(formData)
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}
