import React, {ChangeEvent} from "react";
import style from "../ProfileInfo.module.scss"

type PropsStatusType = {
    status: string | null
    updateStatus?: (status: string | null) => void
}

export class ProfileStatus extends React.Component<PropsStatusType> {

    state = {
        editMode: false,
        status: this.props.status
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
        if (this.props.updateStatus)
            this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps: Readonly<PropsStatusType>, prevState: Readonly<{}>) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div className={style.ProfileStatus}>
                {
                    !this.state.editMode &&
                    <div>
                    <span onDoubleClick={this.activateEditMode}>
                        <b> {this.props.status || 'No status'}</b>
                    </span>
                    </div>
                }
                {
                    this.state.editMode &&
                    <div>
                        <input autoFocus
                               onChange={this.onStatusChange}
                               onBlur={this.deactivateEditMode}
                               value={this.state.status ? this.state.status : ''}
                        />
                    </div>
                }
            </div>
        )
    }

}
