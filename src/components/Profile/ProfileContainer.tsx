import {Profile, ProfileInfoType} from "./Profile";
import {Component} from "react";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";

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
    setUserProfile: (profile: ProfileInfoType) => void
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

        console.log(userId)
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
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
    setUserProfile
})(WithUrlDataComponent)