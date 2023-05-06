import {combineReducers,  legacy_createStore as createStore} from "redux";
import {profileReducer} from "./Profile-reducer";
import {dialogsReducer} from "./Dialogs-reducer";
import {usersReducer} from "./users-reducer";

const rootReducer = combineReducers({
    profilePage : profileReducer,
    dialogsPage : dialogsReducer,
    usersPage: usersReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

let store = createStore(rootReducer)

// @ts-ignore
window.store =store

export default store