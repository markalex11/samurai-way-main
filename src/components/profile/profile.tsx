import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./myposts/myPostsContainer";

function Profile(props:any) {
    return <div>
        <ProfileInfo profile={props.profile} />
        <MyPostsContainer
        />
    </div>

}

export default Profile