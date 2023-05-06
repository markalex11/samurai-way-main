import React from "react";
import s from './ProfileInfo.module.css'
import userLogo from "./../../../assets/images/user.png"
import Preloader from "../../common/Preloader/Preloader";


function ProfileInfo(props:any) {
    if(!props.profile){
        return <Preloader/>
    }
    return(
    <div>
            <div>
                <img className={s.backimg} src='https://cdn.pixabay.com/photo/2016/05/24/16/48/mountains-1412683_1280.png'/>
            </div>
            <div className={s.discription_block}>
                <img src={props.profile.photos.large}/>
                disc
            </div>
        </div>
    )

}

export default ProfileInfo