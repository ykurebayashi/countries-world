import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../Components/Header";
import GlobalContext from "../Context/GlobalContext";

function Detailed() {
    const { countryName } = useParams();
    const { countrySelected, setContrySelected } = useContext(GlobalContext);

    useEffect(() => {
        (async function () {
            try {
                const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
                const json = await response.json();
                setContrySelected(json[0]);
            } catch (e) {
                console.error(e);
            }
        })();
    }, []);

    return (
        <div className="Detail-Page-Body">
            <Header name={`${countryName} Details`} />
            {console.log(countrySelected)}
            {countrySelected.length === 0 ? <p>Loading</p> :
                <div className="Detailed-page-infos">
                    <div className="Detailed-main-infos">
                        <h2>{countrySelected.name.common} </h2>
                        <h4>Official Name: {countrySelected.name.official} </h4>
                        <img src={countrySelected.flags.png} alt={`${countrySelected.name.common} Flag`} />
                    </div>
                    <div className="Detailed-second-infos">
                        <p><span className="info-span">Continent:</span> {countrySelected.continents[0]}</p>
                        <p><span className="info-span">Population:</span> {countrySelected.population}</p>
                        <p><span className="info-span">Capital:</span> {countrySelected.capital[0]}</p>
                        <p><span className="info-span">Area:</span> {countrySelected.area} km²</p>
                        <p><span className="info-span">Main language:</span> {Object.entries(countrySelected.languages)[0][1]}</p>
                    </div>
                    <iframe src={countrySelected.maps.googleMaps} />
                </div>
            }

        </div>
    )
}

export default Detailed;