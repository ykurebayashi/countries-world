/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react";
import CountryCard from "../Components/CountryCard";
import Header from "../Components/Header";
import GlobalContext from "../Context/GlobalContext";
import { Link } from "react-router-dom";
import Filter from "../Components/Filter";

function Main() {
    const { countries, setCountries, textFilter, dropDown } = useContext(GlobalContext);

    useEffect(() => {
        (async function () {
            try {
                if(dropDown === '' || dropDown === 'All') {
                    const response = await fetch("https://restcountries.com/v3/all");
                    const json = await response.json();
                    setCountries(json);
                } else {
                    const response = await fetch(`https://restcountries.com/v3.1/region/${dropDown}`);
                    const json = await response.json();
                    setCountries(json);
                }
            } catch (e) {
                console.error(e);
            }
        })();
    }, [dropDown]);

    return (
        <div className="Main-Page-Body">
            <Header name="Main" />
            <Filter />
            {countries.length !== 0 ? textFilter === '' ?
                countries.map((country) => {
                    return <Link to={`/details/${country.name.official}`} >
                        <CountryCard
                            countryImg={dropDown === '' || dropDown ==='All'? country.flags[1] : country.flags.png}
                            countryName={country.name.common}
                            countryPopulation={country.population}
                            countryRegion={country.region}
                            countryCapital={country.capital}
                        />
                    </Link>
                }) : countries.filter((filter) => filter.name.common.toLowerCase().includes(textFilter.toLowerCase()))
                    .map((country) => {
                        return <Link to={`/details/${country.name.official}`} >
                            <CountryCard
                                countryImg={dropDown === '' || dropDown ==='All'? country.flags[1] : country.flags.png}
                                countryName={country.name.common}
                                countryPopulation={country.population}
                                countryRegion={country.region}
                                countryCapital={country.capital}
                            />
                        </Link>

                    })
                : <p>Loading...</p>}
        </div>
    )
}

export default Main;
