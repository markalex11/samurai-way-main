import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {ActionTypes, DialogsPageType} from "../redux/store";
import {addMessageAC, updateNewMessageAC} from "../redux/Dialogs-reducer";

type DialogsPropsType = {
    // allDialogs:DialogsPageType
    // dispatch: (action:ActionTypes)=>void
    updateNewMessageBody: (newMessageText: string) => void
    sendMessage: () => void
    dialogsPage: DialogsPageType
}


export const Dialogs = (props: DialogsPropsType) => {


    let dialogsElements = props.dialogsPage.dialogs.map((el: { name: string; id: number; }) => <DialogItem name={el.name}
                                                                                                     id={el.id}/>)


    let messegesElements = props.dialogsPage.messages.map((el: { message: string; }) => <Message message={el.message}/>)


    const addMessage = () => {
        // props.dispatch(addMessageAC())
        props.sendMessage()

    }

    const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        // props.dispatch(updateNewMessageAC(e.currentTarget.value))
        props.updateNewMessageBody(e.currentTarget.value)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messegesElements}
                <textarea onChange={onMessageChange} value={props.dialogsPage.newMessage}></textarea>
                <button onClick={addMessage}>add</button>
            </div>
        </div>
    )
}