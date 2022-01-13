import {Profile} from "./Profile";
import {Component} from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {getStatusTC, ProfileType, setUserProfileTC, updateStatusTC} from "../../redux/profile-reducer";


type MapStateToPropsType = {
    profile: ProfileType
    status: string | null
}
type MapDispatchType = {
    setUserProfileTC: (userId: string | undefined) => void
    getStatusTC: (userId: string | undefined) => void
    updateStatusTC: (status: string | null) => void
}
type PropsType = MapStateToPropsType & MapDispatchType
type PathParamsType = {
    userId: string | undefined
}
type CommonPropsType = RouteComponentProps<PathParamsType> & PropsType

class ProfileContainer extends Component<CommonPropsType> {

    componentDidMount(){
        let userId = this.props.match.params.userId === undefined
            ? '15114'
            : this.props.match.params.userId
        this.props.setUserProfileTC(userId)
        this.props.getStatusTC(userId)
    }
    render() {
        return (
            <Profile profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatusTC}/>
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}

const WithUrlDataComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {
    setUserProfileTC,
    getStatusTC,
    updateStatusTC
})(WithUrlDataComponent)
