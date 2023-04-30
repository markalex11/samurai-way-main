import React, {ChangeEvent,KeyboardEvent} from "react";
import s from './myposts.module.css'
import Post from "./post/post";
import {MyPostsPropsType} from "./myPostsContainer";

function Myposts(props:MyPostsPropsType) {

    let postsElements =
        props.posts.map((el) =>
            <Post key={el.id} message={el.message} likes={el.likesCount}/>)

    const onAddPost = () => {
        props.addPost()
    }


    const onPostChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value)
    }
    const onKeyDownHandler = (e:KeyboardEvent<HTMLTextAreaElement>) => {
        if(e.key === "Enter") {
            onAddPost()
        }
    }

    return (
        <div className={s.post_block}>
            My posts
            <div>
                <div>
                    <textarea onKeyDown={onKeyDownHandler} onChange={onPostChange} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div>
                New post
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )


}

export default Myposts