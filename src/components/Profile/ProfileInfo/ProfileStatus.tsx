import React from "react";
import style from "./ProfileInfo.module.scss"

type PropsStatusType = {
    status: string | null
}

export class ProfileStatus extends React.Component<PropsStatusType> {

    state = {
        editMode: false
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <div className={style.ProfileStatus}>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode}> <b> {this.props.status}</b> </span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input autoFocus onBlur={this.deactivateEditMode} placeholder={"StatusText"} value={this.props.status ? this.props.status : ""}/>
                </div>
                }
            </div>
        )
    }

}
