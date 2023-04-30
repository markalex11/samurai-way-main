import {addMessageAC, DialogsPageType, updateNewMessageAC} from "../redux/Dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";
import {Dispatch} from "redux";

type MapStateToPropsReturnType = {
    dialogsPage: DialogsPageType
}
type MapDispatchToPropsReturnType = {
    updateNewMessageBody: (newMessageText:string) => void
    sendMessage: () => void
}
export type DialogsPropsType = MapDispatchToPropsReturnType & MapStateToPropsReturnType

const mapStateToProps = (state:AppStateType):MapStateToPropsReturnType => {
    return { dialogsPage: state.dialogsPage }
}
const mapDispatchToProps = (dispatch:Dispatch): MapDispatchToPropsReturnType => {
    return {
        updateNewMessageBody: (newMessageText:string) => {dispatch(updateNewMessageAC(newMessageText))},
        sendMessage: () => {dispatch(addMessageAC())}
    }
}

export const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)