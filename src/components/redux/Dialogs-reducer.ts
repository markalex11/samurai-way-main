import {ActionTypes, DialogsPageType} from "./store";


export type UpdateNewMessageActionType = {
    type: 'UPDATE-NEW-MESSAGE'
    newMessage: string

}
export type AddMessageActionType = {
    type: 'ADD-MESSAGE'
}

const initialState: DialogsPageType = {
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
}


export const dialogsReducer = (state:DialogsPageType = initialState, action:ActionTypes) => {
    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE':
            state.newMessage = action.newMessage
            break;
        case 'ADD-MESSAGE':
            let newMessage = {id: 5, message: state.newMessage}
            state.messages.push(newMessage)
            state.newMessage = ''
            break;
    }
    return state
}

export const addMessageAC = (): AddMessageActionType => {
    return (
        {type: 'ADD-MESSAGE'}
    ) as const
}
export const updateNewMessageAC = (newMessage: string): UpdateNewMessageActionType => {
    return ({
        type: 'UPDATE-NEW-MESSAGE',
        newMessage: newMessage
    })
}