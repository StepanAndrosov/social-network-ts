import React from "react";
import style from "./FormControls.module.css"

type FieldType = {
    input: any
    meta: any
}

const FormControl: React.FC<FieldType> = ({input, meta, ...props}) => {
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
            <textarea className={style.Textarea} {...props.input} {...restProps}  />
        </FormControl>
    )
}
export const Input: React.FC<FieldType> = (props) => {
    const {input, meta, children, ...restProps} = props
    return (
        <FormControl {...props}>
            <input className={style.Textarea} {...props.input} {...restProps}  />
        </FormControl>
    )
}
