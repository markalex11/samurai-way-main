
let renderFull = () => {
    console.log('hi')
}

type MessageType = {
    id: number
    message: string
}

type DialogsType = {
    id:number
    name: string
}

export type DialogsPageType = {
    dialogs:Array<DialogsType>
    messages:Array<MessageType>
}

export type PostsType = {
    id: number
    message: string
    likesCount: number
}

export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText:string
}

type SidebarType = {}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}


let state: RootStateType = {
    profilePage: {
        newPostText: '',
        posts: [
            {id:1 , message:'hey, how are you' , likesCount: 12},
            {id:2 , message:'this is my first post', likesCount: 11},
            {id:3 , message:'bla bla', likesCount: 20},
            {id:4 , message:'dada', likesCount: 9}
        ],
    },
    dialogsPage: {
        dialogs: [
            { name: 'Dimych', id: 1},
            { name: 'Sacha', id: 2},
            { name: 'Sveta', id: 3},
            { name: 'Valera', id: 4}
        ],
        messages: [
            {id:1 , message:'hello my friend'},
            {id:2 , message:'how is to learn programming'},
            {id:3 , message:'yo zadrot'},
            {id:4 , message:'how are you?'},
        ]
    },
    sidebar:{}

}

export const addPost = () => {
    let newPost:PostsType = {id:5, message:state.profilePage.newPostText, likesCount:0};
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    renderFull()
};

export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText
    renderFull()
}

export const subscribe = (observer:()=>void) => {
  renderFull=observer
}
export default state