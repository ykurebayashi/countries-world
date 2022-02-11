/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react";
import CountryCard from "../Components/CountryCard";
import Header from "../Components/Header";
import GlobalContext from "../Context/GlobalContext";
import { Link } from "react-router-dom";

function Main() {
    const { countries, setCountries } = useContext(GlobalContext);

    useEffect(() => {
        (async function () {
            try {
                const response = await fetch("https://restcountries.com/v3/all");
                const json = await response.json();
                setCountries(json);
            } catch (e) {
                console.error(e);
            }
        })();
    }, []);

    return (
        <div className="Main-Page-Body">
            <Header name="Main" />
            {console.log(countries)}
            {countries.length !== 0 ? countries.map((country) => {
                return <Link to={ `/details/${country.name.official}}` } >
                    <CountryCard
                        countryImg={country.flags[1]}
                        countryName={country.name.common}
                        countryPopulation={country.population}
                        countryRegion={country.region}
                        countryCapital={country.capital}
                    />
                </Link>
            }) : <p>Loading...</p>}
        </div>
    )
}

export default Main;
