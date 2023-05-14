import {combineReducers,  legacy_createStore as createStore} from "redux";
import {profileReducer} from "./Profile-reducer";
import {dialogsReducer} from "./Dialogs-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./AuthReducer";

const rootReducer = combineReducers({
    profilePage : profileReducer,
    dialogsPage : dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

let store = createStore(rootReducer)

// @ts-ignore
window.store =store

export default store