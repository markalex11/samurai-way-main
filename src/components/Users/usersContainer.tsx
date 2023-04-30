import React from "react";
import {connect} from "react-redux";
import {Users} from "./users";
import {followAC, setUsersAC, unFollowAC, UserType} from "../redux/users-reducer";
import {Dispatch} from "redux";
import {AppStateType} from "../redux/redux-store";

type MapStateToPropsReturnType = {
    users: UserType[]
}
type MapDispatchToPropsReturnType = {
    follow: (usurId:number) => void
    unfollow: (usurId:number) => void
    setUsers: (users:UserType[]) => void
}
export type UsersPropsType = MapDispatchToPropsReturnType & MapStateToPropsReturnType


const mapStateToProps = (state:AppStateType): MapStateToPropsReturnType => {
    return { users: state.usersPage.users }
}
const mapDispatchToProps = (dispatch:Dispatch):MapDispatchToPropsReturnType => {
    return {
        follow: (usurId:number) => {
            dispatch(followAC(usurId))},
        unfollow: (usurId:number) => {
            dispatch(unFollowAC(usurId))},
        setUsers: (users:UserType[]) => {
            dispatch(setUsersAC(users))
        }
    }
}
export const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users)