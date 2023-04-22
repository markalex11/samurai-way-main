import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {ActionTypes, DialogsPageType} from "../redux/store";
import {addMessageAC, updateNewMessageAC} from "../redux/Dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";

type DialogsContPropsType = {
    // allDialogs:DialogsPageType
    // dispatch: (action:ActionTypes)=>void
    store: any
}

// export const DialogsContainer = (props: DialogsContPropsType) => {
//     // let state = props.store.getState().dialogsPage
//     //
//     // const onSendMessage = () => {
//     //     props.store.dispatch(addMessageAC())
//     // }
//     //
//     // const onMessageChange = (newMessageText: string) => {
//     //     props.store.dispatch(updateNewMessageAC(newMessageText))
//     // }
//
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     let state = store.getState().dialogsPage
//
//                     const onSendMessage = () => {
//                         store.dispatch(addMessageAC())
//                     }
//
//                     const onMessageChange = (newMessageText: string) => {
//                         store.dispatch(updateNewMessageAC(newMessageText))
//                     }
//                    return <Dialogs updateNewMessageBody={onMessageChange} sendMessage={onSendMessage} state={state}/>
//                 }
//             }
//         </StoreContext.Consumer>
//     )
// }

let mapStateToProps = (state:any) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch:any) => {
    return {
        updateNewMessageBody: (newMessageText:string) => {dispatch(updateNewMessageAC(newMessageText))},
        sendMessage: () => {dispatch(addMessageAC())}

    }
}

export const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)