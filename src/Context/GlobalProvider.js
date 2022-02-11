import React, { useState } from "react";
import GlobalContext from "./GlobalContext";

function GlobalProvider({ children }) {
    const [countries, setCountries] = useState([]);

    const contextValue = {
        countries,
        setCountries,
    }

    return(
        <GlobalContext.Provider value={ contextValue }>
            { children }
        </GlobalContext.Provider>
    )
}

export default GlobalProvider;