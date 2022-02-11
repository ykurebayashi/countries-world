import React, { useState } from "react";
import GlobalContext from "./GlobalContext";

function GlobalProvider({ children }) {
    const [countries, setCountries] = useState([]);
    const [countrySelected, setContrySelected] = useState([]);

    const contextValue = {
        countries,
        setCountries,
        countrySelected,
        setContrySelected,
    }

    return(
        <GlobalContext.Provider value={ contextValue }>
            { children }
        </GlobalContext.Provider>
    )
}

export default GlobalProvider;