import React from "react";
import a from './post.module.css'


type PostType = {
    message: string
    likes: number
}
function Post(props:PostType) {
    return <div className={a.item}>
        <img
            src='https://sm.ign.com/ign_nordic/feature/a/avatar-the/avatar-the-way-of-water-post-credits-scene-check-in-and-endi_zpv1.jpg'/>
        {props.message}
        <div>
        <span>{props.likes} like</span>
        </div>

    </div>


}

export default Post