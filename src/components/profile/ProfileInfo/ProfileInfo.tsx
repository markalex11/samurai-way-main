import React from "react";
import s from './ProfileInfo.module.css'


function ProfileInfo() {
    return(
    <div>

            <div>
                <img className={s.backimg} src='https://cdn.pixabay.com/photo/2016/05/24/16/48/mountains-1412683_1280.png'/>
            </div>
            <div className={s.discription_block}>
                Ava + disc
            </div>

        </div>
    )

}

export default ProfileInfo