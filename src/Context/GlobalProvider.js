import React, { useState } from "react";
import GlobalContext from "./GlobalContext";

function GlobalProvider({ children }) {
    const [countries, setCountries] = useState([]);
    const [countrySelected, setContrySelected] = useState([]);
    const [textFilter, setTextFilter] = useState('');
    const [dropDown, setDropDownValue] = useState('');

    const contextValue = {
        countries,
        setCountries,
        countrySelected,
        setContrySelected,
        textFilter,
        setTextFilter,
        dropDown,
        setDropDownValue,
    }

    return(
        <GlobalContext.Provider value={ contextValue }>
            { children }
        </GlobalContext.Provider>
    )
}

export default GlobalProvider;