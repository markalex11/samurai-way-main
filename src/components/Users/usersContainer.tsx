import React from "react";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleIsFetching, toggleIsFollowingProgress,
    unFollow,
    UserType
} from "../redux/users-reducer";
import {AppStateType} from "../redux/redux-store";
import {Users} from "./Users";
import {usersApi} from "../../api/Api";


class UsersApiComponent extends React.Component<UsersPropsType, any> {
    //метод который внизу автоматически вызывается реактом при первой отрисовке классовой компоненты
    componentDidMount() {
        this.props.toggleIsFetching(true)
        usersApi.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
                this.props.toggleIsFetching(false)

            })
    }

    onPageChanged = (pageNumber: number) => {

        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)

        usersApi.getUsers(pageNumber, this.props.pageSize).then(data => {
                this.props.setUsers(data.items)
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
                   toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
                   isFollowingProgress={this.props.isFollowingProgress}
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
    isFollowingProgress: number[]
}
type MapDispatchToPropsReturnType = {
    follow: (usurId:number) => void
    unFollow: (usurId:number) => void
    setUsers: (users:UserType[]) => void
    setCurrentPage: (pageNumber:number) => void
    setTotalUsersCount: (count: number) => void
    toggleIsFetching: (isFetching:boolean) => void
    toggleIsFollowingProgress: (userId: number , isProgress: boolean) => void

}

export type UsersPropsType = MapDispatchToPropsReturnType & MapStateToPropsReturnType


const mapStateToProps = (state:AppStateType): MapStateToPropsReturnType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        isFollowingProgress: state.usersPage.isFollowingProgress
    }
}

export const UsersContainer = connect(mapStateToProps,{follow, unFollow, setUsers,
    setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleIsFollowingProgress})(UsersApiComponent)