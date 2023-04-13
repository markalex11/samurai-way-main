import {ActionTypes, PostsType, ProfilePageType} from "./store";

export type AddPostActionType = {
    type: 'ADD-POST'
}

export type UpdateNewPostActionType = {
    type: "UPDATE-NEW-POST-TEXT"
    newText: string
}

const initialState:ProfilePageType = {
    newPostText: '',
    posts: [
        {id: 1, message: 'hey, how are you', likesCount: 12},
        {id: 2, message: 'this is my first post', likesCount: 11},
        {id: 3, message: 'bla bla', likesCount: 20},
        {id: 4, message: 'dada', likesCount: 9}
    ]
}

export const profileReducer = (state:ProfilePageType = initialState, action:ActionTypes) => {
    switch (action.type) {
        case "ADD-POST" :
            let newPost: PostsType = {id: 5, message: state.newPostText, likesCount: 0};
            state.posts.push(newPost);
            state.newPostText = '';
            return state
        case "UPDATE-NEW-POST-TEXT" :
            state.newPostText = action.newText
            return state
        default:
            return state
    }
}

export const addPostActionCreator = (): AddPostActionType => {
    return {
        type: "ADD-POST"
    } as const
}
export const updateNewPostActionCreator = (newText: string): UpdateNewPostActionType => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newText: newText
    } as const
}