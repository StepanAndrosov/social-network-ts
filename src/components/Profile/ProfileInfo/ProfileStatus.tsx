import React from "react";
import style from "./ProfileInfo.module.scss"

type PropsStatusType = {
    status: string | null
}

export class ProfileStatus extends React.Component<PropsStatusType> {

    state = {
        editMode: false
    }

    activateEditMode(){
        // this.setState({
        //     editMode: true
        // })
    }

    render() {
        return (
            <div className={style.ProfileStatus}>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode}>StatusText: {this.props.status}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input placeholder={"StatusText"} value={this.props.status ? this.props.status : ""}/>
                </div>
                }
            </div>
        )
    }

}