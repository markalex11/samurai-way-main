import React, {ChangeEvent} from "react";
import s from './myposts.module.css'
import Post from "./post/post";
import {PostsType} from "../../redux/state";

type MyPostsPropsType = {
    posts:Array<PostsType>
    addPost:()=>void
    newPostText:string
    updateNewPostText: (newText:string)=>void
}
function Myposts(props:MyPostsPropsType) {

    let postsElements =
        props.posts.map((el: { message: string; likesCount: number; }) =>
            <Post message={el.message} likes={el.likesCount}/>)

    const addPost = () => {
        props.addPost()
    }


    const onPostChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
            props.updateNewPostText(e.currentTarget.value)
    }

    return (
        <div className={s.post_block}>
            My posts
            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
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