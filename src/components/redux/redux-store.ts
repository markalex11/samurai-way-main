import {combineReducers,  legacy_createStore as createStore} from "redux";
import {profileReducer} from "./Profile-reducer";
import {dialogsReducer} from "./Dialogs-reducer";

const reducers = combineReducers({
    profilePage : profileReducer,
    dialogsPage : dialogsReducer
})

type ReducersType = typeof reducers

export type ReduxStateType = ReturnType<ReducersType>

let store = createStore(reducers)

export default store