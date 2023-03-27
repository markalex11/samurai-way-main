import React from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPageType} from "../redux/state";

type DialogsPropsType = {
    allDialogs:DialogsPageType
}



export const Dialogs = (props:DialogsPropsType) => {


    let dialogsElements = props.allDialogs.dialogs.map((el: { name: string; id: number; }) => <DialogItem name={el.name} id={el.id}/>)


    let messegesElements = props.allDialogs.messages.map((el: { message: string; }) => <Message message={el.message}/>)

    let newMessage = React.createRef<HTMLTextAreaElement>()

    const addMessage = () => {
       if(newMessage.current !== null){
           alert(newMessage.current.value)
       }
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messegesElements}
                <textarea ref={newMessage}></textarea><button onClick={addMessage}>add</button>
            </div>
        </div>
    )
}