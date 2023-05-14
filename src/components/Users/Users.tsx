import React from 'react';
import userPhoto from "../../assets/images/user.png";
import {UserType} from "../redux/users-reducer";
import Preloader from '../common/Preloader/Preloader';
import {NavLink} from "react-router-dom";
import {usersApi} from "../../api/Api";

type PropsType = {
    totalUsersCount: number
    pageSize: number
    onPageChanged: (pageNumber:number) => void
    currentPage: number
    users: UserType[]
    unFollow: (usurId:number) => void
    follow: (usurId:number) => void
    isFetching: boolean
    toggleIsFollowingProgress: (userId: number, isProgress: boolean) => void
    isFollowingProgress: number[]
}

export const Users = (props:PropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <>
            {props.isFetching? <Preloader/>: null}
        <div>
            <div>{
                pages.map(el =>
                    <span key={el} onClick={() => props.onPageChanged(el)}
                          style={props.currentPage === el ? {fontWeight: "bold"} : {}}> {el} </span>)
            }</div>
            {props.users.map(u =>
                <div key={u.id} style={{maxHeight: "200px", display: "flex", width: "100%", gap: "50px"}}>
                    <div style={{display: "flex", flexDirection: "column"}}>
                        <NavLink to={'/profile/' + u.id}>
                        <img alt={'avatar'} style={{maxHeight: "150px", maxWidth: "150px"}}
                             src={u.photos.small ? u.photos.small : userPhoto}/>
                        </NavLink>
                        {
                            u.followed
                                ? <button  disabled={props.isFollowingProgress.some( id => id === u.id )} onClick={() => {
                                        props.toggleIsFollowingProgress(u.id,true)
                                        usersApi.unfollowUser(u.id).then(response => {
                                            if(response.data.resultCode === 0){
                                                props.unFollow(u.id)
                                                props.toggleIsFollowingProgress(u.id,false)
                                            }

                                        })



                                } }
                                          style={props.isFollowingProgress
                                              ?{maxHeight: "150px", maxWidth: "150px"}
                                              :{maxHeight: "150px", maxWidth: "150px"}
                                }>
                                    Unfollow</button>
                                : <button disabled={props.isFollowingProgress.some( id => id === u.id )} onClick={() => {
                                    props.toggleIsFollowingProgress(u.id,true)
                                        usersApi.followUser(u.id).then(response => {
                                            if(response.data.resultCode === 0){
                                                props.follow(u.id)
                                                props.toggleIsFollowingProgress(u.id,false)
                                            }

                                        })

                                } }
                                          style={{maxHeight: "150px", maxWidth: "150px"}}>follow</button>
                        }
                    </div>
                    <div style={{display: "flex", flexDirection: "row", gap: "200px"}}>
                        <div>
                            <h3>{u.name}</h3>
                            <h5>{u.status}</h5>
                        </div>
                        <div>
                            <h3>{"u.location.country"}</h3>
                            <h5>{"u.location.city"}</h5>
                        </div>
                    </div>
                </div>
            )}
        </div>
        </>
    );
};

