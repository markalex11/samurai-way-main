import React from "react";
import store from "./components/redux/redux-store";
import App from "./App";

const StoreContext = React.createContext<any>(null)

export const Provider = (props:any) => {
   return <StoreContext.Provider value={props.store}>
       {props.children}
    </StoreContext.Provider>
}


export default StoreContext
