import React from "react";
import s from './profile.module.css'
import Myposts from "./myposts/myposts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../redux/state";

type ProfilePropsType = {
    allProfile:ProfilePageType
    addPost: ()=> void
    updateNewPostText: (newText:string)=>void
}
function Profile(props:ProfilePropsType) {
    return <div>
        <ProfileInfo/>
        <Myposts posts={props.allProfile.posts}
                 addPost={props.addPost}
                 newPostText={props.allProfile.newPostText}
                 updateNewPostText={props.updateNewPostText}
        />
    </div>

}

export default Profile