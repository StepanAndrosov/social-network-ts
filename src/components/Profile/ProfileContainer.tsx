import {Profile} from "./Profile";
import {Component} from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {setUserProfileTC} from "../../redux/profile-reducer";

type MapStateToPropsType = {
    profile: {
        aboutMe: null | string
        contacts: {
            facebook: null | string
            website: null | string
            vk: null | string
            twitter: null | string
            instagram: null | string
            youtube: null | string
            github: null | string
            mainLink: null | string
        },
        lookingForAJob: boolean
        lookingForAJobDescription: null | string
        fullName: string
        userId: number
        photos: {
            small: string
            large: string
        }
    }
}
type MapDispatchType = {
    setUserProfileTC: (userId: string | undefined) => void
}
type PropsType = MapStateToPropsType & MapDispatchType
type PathParamsType = {
    userId: string | undefined
}
type CommonPropsType = RouteComponentProps<PathParamsType> & PropsType

class ProfileContainer extends Component<CommonPropsType> {

    componentDidMount(){
        let userId = this.props.match.params.userId === undefined
            ? '2'
            : this.props.match.params.userId
        this.props.setUserProfileTC(userId)
    }
    render() {
        return (
            <Profile profile={this.props.profile}/>
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile
    }
}

const WithUrlDataComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {
    setUserProfileTC
})(WithUrlDataComponent)