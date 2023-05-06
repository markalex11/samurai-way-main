import React from "react";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleIsFetching,
    unFollow,
    UserType
} from "../redux/users-reducer";
import {AppStateType} from "../redux/redux-store";
import axios from "axios";
import {Users} from "./Users";


class UsersApiComponent extends React.Component<UsersPropsType, any> {
    //метод который внизу автоматически вызывается реактом при первой отрисовке классовой компоненты
    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0//users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
                this.props.toggleIsFetching(false)

            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0//users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.toggleIsFetching(false)
            })
    }


    render() {

        return (
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   onPageChanged={this.onPageChanged}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   unFollow={this.props.unFollow}
                   follow={this.props.follow}
                   isFetching={this.props.isFetching}
            />
        )
    }
}

type MapStateToPropsReturnType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}
type MapDispatchToPropsReturnType = {
    follow: (usurId:number) => void
    unFollow: (usurId:number) => void
    setUsers: (users:UserType[]) => void
    setCurrentPage: (pageNumber:number) => void
    setTotalUsersCount: (count: number) => void
    toggleIsFetching: (isFetching:boolean) => void

}

export type UsersPropsType = MapDispatchToPropsReturnType & MapStateToPropsReturnType


const mapStateToProps = (state:AppStateType): MapStateToPropsReturnType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

export const UsersContainer = connect(mapStateToProps,{follow, unFollow, setUsers,
    setCurrentPage, setTotalUsersCount, toggleIsFetching})(UsersApiComponent)