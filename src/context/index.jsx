import { createContext } from "react";

export const GlobalContext = createContext(null);


import React from 'react'

function GlobalState({ children }) {
    return (
        <GlobalContext.Provider>{children}</GlobalContext.Provider>
    )
}

export default GlobalState
