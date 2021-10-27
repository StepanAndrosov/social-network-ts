import {createContext, ReactNode} from "react";
import {StoreType} from "./App";

export const StoreContext = createContext({} as StoreType)

export type ProviderType = {
    store: StoreType
    children: ReactNode
}

export const Provider = (props: ProviderType) => {
    return (
        <StoreContext.Provider value={props.store}>
            {props.children}
        </StoreContext.Provider>
    )
}