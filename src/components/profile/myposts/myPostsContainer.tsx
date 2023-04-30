import React, {ChangeEvent} from "react";
import s from './myposts.module.css'
import Post from "./post/post";
import {addPostActionCreator, PostsType, updateNewPostActionCreator} from "../../redux/Profile-reducer";
import Myposts from "./myposts";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";

// type MyPostsContPropsType = {
//     posts:Array<PostsType>
//     newPostText:string
//     dispatch: (action:ActionTypes) => void
//     store: any
// }

// function MyPostsContainer(props:MyPostsContPropsType) {
//     // let state = props.store.getState()
//     // const addPost = () => {
//     //     props.store.dispatch(addPostActionCreator())
//     //     // props.dispatch(addPostActionCreator())
//     // }
//     // const onPostChange = (newText:string) => {
//     //     props.store.dispatch(updateNewPostActionCreator(newText))
//     // }
//
//     return (
//         <StoreContext.Consumer>
//             { (store) => {
//                 let state = store.getState()
//                 const addPost = () => {
//                     store.dispatch(addPostActionCreator())
//                     // props.dispatch(addPostActionCreator())
//                 }
//                 const onPostChange = (newText:string) => {
//                     store.dispatch(updateNewPostActionCreator(newText))
//                 }
//
//
//                 return <Myposts posts={state.profilePage.posts}
//                          newPostText={state.profilePage.newPostText}
//                          updateNewPostText={onPostChange}
//                          addPost={addPost}
//                 />
//             }
//             }
//         </StoreContext.Consumer>
//     )
//
//
// }

type MapStateToPropsReturnType = {
    posts: PostsType[]
    newPostText: string
}
type MapDispatchToPropsReturnType = {
    updateNewPostText: (newText:string) => void
    addPost: () => void
}
export type MyPostsPropsType = MapStateToPropsReturnType & MapDispatchToPropsReturnType

const mapStateToProps = (state:AppStateType): MapStateToPropsReturnType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch:Dispatch): MapDispatchToPropsReturnType => {
    return {
        updateNewPostText: (newText:string) => {dispatch(updateNewPostActionCreator(newText))},
        addPost: () => {dispatch(addPostActionCreator())}
    }
}

export const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(Myposts)

export default MyPostsContainer