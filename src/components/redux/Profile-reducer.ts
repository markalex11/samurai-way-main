export type PostsType = {
    id: number
    message: string
    likesCount: number
}
export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
}

type AddPostAT = {
    type: 'ADD-POST'
}
type UpdateNewPostAT = {
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

export const profileReducer = (state:ProfilePageType = initialState, action: AddPostAT | UpdateNewPostAT):ProfilePageType => {
    switch (action.type) {
        case "ADD-POST" :
            let newPost: PostsType = {id: 5, message: state.newPostText, likesCount: 0};
            return {...state,posts: [...state.posts,newPost], newPostText:"" }

        case "UPDATE-NEW-POST-TEXT" :
            return {...state,newPostText:action.newText}

        default:
            return state
    }
}

export const addPostActionCreator = (): AddPostAT => {
    return {
        type: "ADD-POST"
    } as const
}
export const updateNewPostActionCreator = (newText: string): UpdateNewPostAT => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newText: newText
    } as const
}