import React, {useRef} from "react";
import s from './myposts.module.css'
import Post from "./post/post";
import {PostsType} from "../../redux/state";

type MyPostsPropsType = {
    posts:Array<PostsType>
    addPost:(messagePost:string)=>void
}
function Myposts(props:MyPostsPropsType) {

    // const posts = [
    //     {id:1 , message:'hey, how are you' , likesCount: 12},
    //     {id:2 , message:'this is my first post', likesCount: 11}
    // ]

    let postsElements =
        props.posts.map((el: { message: string; likesCount: number; }) =>
            <Post message={el.message} likes={el.likesCount}/>)

    const addPost = () => {
        if (newPostElement.current) {
            props.addPost(newPostElement.current.value)
            newPostElement.current.value = ''
        }
    }

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    return (
        <div className={s.post_block}>
            My posts
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
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