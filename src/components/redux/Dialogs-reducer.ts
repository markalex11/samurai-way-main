type DialogsType = {
    id: number
    name: string
}
type MessageType = {
    id: number
    message: string
}
export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
    newMessage: string
}

type UpdateNewMessageAT = {
    type: 'UPDATE-NEW-MESSAGE'
    newMessage: string
}
type AddMessageAT = {
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


export const dialogsReducer = (state: DialogsPageType = initialState, action:UpdateNewMessageAT|AddMessageAT): DialogsPageType => {
    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE':
            return {...state, newMessage: action.newMessage}

        case 'ADD-MESSAGE':
            let newMessage = {id: 5, message: state.newMessage}
            return {...state, messages: [...state.messages, newMessage], newMessage: ''}

        default:
            return state
    }
}

export const addMessageAC = (): AddMessageAT => {
    return (
        {type: 'ADD-MESSAGE'}
    ) as const
}
export const updateNewMessageAC = (newMessage: string): UpdateNewMessageAT => {
    return ({
        type: 'UPDATE-NEW-MESSAGE',
        newMessage: newMessage
    }) as const
}