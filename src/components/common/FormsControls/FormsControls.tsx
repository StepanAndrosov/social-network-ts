import React from "react";
import style from "./FormControls.module.css"

type FieldType = {
    input: any
    meta: {
        touched: boolean
        error: string
    }
}

const FormControl: React.FC<FieldType> = ({meta, input, ...props} ) => {

    const hasError = meta.touched && meta.error

    return (
        <div className={style.FormBlock + " " + (hasError ? style.error : '')}>
           <div>{props.children}</div>
            <div>
                {hasError && <span>{meta.error}</span>}
            </div>
        </div>
    )
}

export const Textarea: React.FC<FieldType> = (props) => {
    const {input, meta, children, ...restProps} = props
    return (
        <FormControl {...props}>
            <textarea className={style.Textarea} {...input} {...restProps}  />
        </FormControl>
    )
}
export const Input: React.FC<FieldType> = (props) => {
    const {input, meta, children, ...restProps} = props
    return (
        <FormControl {...props}>
            <input className={style.Textarea} {...input} {...restProps}  />
        </FormControl>
    )
}
