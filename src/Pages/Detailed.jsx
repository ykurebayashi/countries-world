import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import GlobalContext from "../Context/GlobalContext";

function Detailed() {
    const { countryName } = useParams();
    const { countrySelected, setContrySelected } = useContext(GlobalContext);

    useEffect(() => {
        (async function () {
            try {
                const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
                const json = await response.json();
                setContrySelected(json);
            } catch (e) {
                console.error(e);
            }
        })();
    }, []);
    
    return(
        <p>{console.log(countrySelected)}Detailed page!</p>
    )
}

export default Detailed;