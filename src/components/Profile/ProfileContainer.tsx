import {Profile} from "./Profile";
import {Component} from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {getStatusTC, getUserProfile, updateStatusTC, savePhoto, saveProfile} from "../../redux/profile-reducer";
import {ProfileType} from "../../api/types";


type MapStateToPropsType = {
    profile: ProfileType
    status: string | null
    authorizedUser: number | null
    auth: boolean
}
type MapDispatchType = {
    getUserProfile: (userId: number | null) => void
    getStatusTC: (userId: number | undefined) => void
    updateStatusTC?: (status: string | null) => void
    savePhoto: (file: File) => void
    saveProfile: (profile: ProfileType) => Promise<void>
}
type PropsType = MapStateToPropsType & MapDispatchType
type PathParamsType = {
    userId: string | undefined
}
type CommonPropsType = RouteComponentProps<PathParamsType> & PropsType

class ProfileContainer extends Component<CommonPropsType> {

    refreshProfile() {
        let userId = this.props.match.params.userId === undefined
            ? this.props.authorizedUser || 15114
            : Number(this.props.match.params.userId)

        this.props.getUserProfile(userId)
        this.props.getStatusTC(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<CommonPropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return (
            <Profile
                savePhoto={this.props.savePhoto}
                isOwner={!this.props.match.params.userId}
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatusTC}
                saveProfile={this.props.saveProfile}
            />
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUser: state.auth.userId,
        auth: state.auth.isAuth
    }
}

const WithUrlDataComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {
    getUserProfile,
    getStatusTC,
    updateStatusTC,
    savePhoto,
    saveProfile
})(WithUrlDataComponent)
