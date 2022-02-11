import React from "react";
import GlobalContext from "./GlobalContext";

function GlobalProvider({ children }) {

    const contextValue = {}

    return(
        <GlobalContext.Provider value={ contextValue }>
            { children }
        </GlobalContext.Provider>
    )
}

export default GlobalProvider;