import React from "react";
import s from './profile.module.css'
import Myposts from "./myposts/myposts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionTypes, ProfilePageType} from "../redux/store";
import MyPostsContainer from "./myposts/myPostsContainer";
type ProfilePropsType = {
    // allProfile:ProfilePageType
    // dispatch: (action:ActionTypes) => void

    // store : any
}
function Profile() {
    return <div>
        <ProfileInfo/>
        <MyPostsContainer
            // posts={props.allProfile.posts}
            //      dispatch={props.dispatch}
            //      newPostText={props.allProfile.newPostText}

        />
    </div>

}

export default Profile