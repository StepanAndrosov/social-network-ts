import {Users} from "./Users";
import {connect} from "react-redux";
import {followAC, setUsersAC, UserType} from "../../redux/users-reducer";
import {Dispatch} from "redux";
import {ActionsType, AppStateType} from "../../redux/redux-store";

type MapDispatchType = {
    follow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
}
type MapStateType = {
    users: Array<UserType>
}

export type UsersPropsType = MapDispatchType & MapStateType

const mapStateToProps = (state: AppStateType): MapStateType => {
    return {
        users: state.usersPage.users
    }
}
const mapDispatchToProps = (dispatch: Dispatch<ActionsType>): MapDispatchType => {
    return {
        follow: (id: number) => dispatch(followAC(id)),
        setUsers: (users: Array<UserType>) => dispatch(setUsersAC(users))
    }
}


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)