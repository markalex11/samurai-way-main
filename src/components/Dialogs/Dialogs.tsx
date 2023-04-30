import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";


export const Dialogs = (props: DialogsPropsType) => {


    let dialogsElements = props.dialogsPage.dialogs.map((el) => <DialogItem key={el.id} name={el.name}
                                                                                                     id={el.id}/>)
    let messegesElements = props.dialogsPage.messages.map((el) => <Message key={el.id} message={el.message}/>)


    const addMessage = () => {
        props.sendMessage()
    }

    const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
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