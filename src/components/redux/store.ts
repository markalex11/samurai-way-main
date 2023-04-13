import {AddPostActionType, profileReducer, UpdateNewPostActionType} from "./Profile-reducer";
import {AddMessageActionType, dialogsReducer, UpdateNewMessageActionType} from "./Dialogs-reducer";

type MessageType = {
    id: number
    message: string
}

type DialogsType = {
    id: number
    name: string
}

export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
    newMessage: string
}

export type PostsType = {
    id: number
    message: string
    likesCount: number
}

export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
}

type SidebarType = {}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}

export type StoreType = {
    _state: RootStateType
    // addPost:()=>void
    // updateNewPostText:(newText: string) => void
    _renderFull: () => void
    subscribe: (observer: () => void) => void
    getState: () => RootStateType
    dispatch: (action: any) => void
}

export type ActionTypes = AddPostActionType | UpdateNewPostActionType | UpdateNewMessageActionType | AddMessageActionType


let store: StoreType = {
    _state: {
        profilePage: {
            newPostText: '',
            posts: [
                {id: 1, message: 'hey, how are you', likesCount: 12},
                {id: 2, message: 'this is my first post', likesCount: 11},
                {id: 3, message: 'bla bla', likesCount: 20},
                {id: 4, message: 'dada', likesCount: 9}
            ],
        },
        dialogsPage: {
            dialogs: [
                {name: 'Dimych', id: 1},
                {name: 'Sacha', id: 2},
                {name: 'Sveta', id: 3},
                {name: 'Valera', id: 4}
            ],
            newMessage: '',
            messages: [
                {id: 1, message: 'hello my friend'},
                {id: 2, message: 'how is to learn programming'},
                {id: 3, message: 'yo zadrot'},
                {id: 4, message: 'how are you?'},
            ]
        },
        sidebar: {}

    },

    _renderFull() {
        console.log('hi')
    },

    subscribe(observer: () => void) {
        this._renderFull = observer
    },

    getState() {
        return this._state
    },

    dispatch(action: ActionTypes) {

        this._state.profilePage = profileReducer(this._state.profilePage,action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage,action)
        // this._state.sidebar...
        this._renderFull()



        // if (action.type === 'ADD-POST') {
        //     let newPost: PostsType = {id: 5, message: this._state.profilePage.newPostText, likesCount: 0};
        //     this._state.profilePage.posts.push(newPost);
        //     this._state.profilePage.newPostText = '';
        //     this._renderFull()
        // } else if (action.type === "UPDATE-NEW-POST-TEXT") {
        //     this._state.profilePage.newPostText = action.newText
        //     this._renderFull()
        // } else if (action.type === 'UPDATE-NEW-MESSAGE') {
        //     this._state.dialogsPage.newMessage = action.newMessage
        //     this._renderFull()
        // } else if (action.type === 'ADD-MESSAGE') {
        //     let newMessage = {id: 5, message: this._state.dialogsPage.newMessage }
        //     this._state.dialogsPage.messages.push(newMessage)
        //     this._state.dialogsPage.newMessage = ''
        //     this._renderFull()
        // }
    }
}

export default store