import React from "react";
import {connect} from "react-redux";
import {Users} from "./users";
import {followAC, setUsersAC, unFollowAC, UserType} from "../redux/users-reducer";
import {Dispatch} from "redux";


const mapStateToProps = (state:any) => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch:Dispatch) => {
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