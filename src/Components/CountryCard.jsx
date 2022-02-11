import React from "react";

function CountryCard(props) {
    const { countryImg, countryName, countryPopulation, countryRegion, countryCapital } = props;

    return(
        <div className="Country-card">
            <img src={ countryImg } alt={ countryName } className="Country-card-image" />
            <h1 className="Country-card-name">{countryName}</h1>
            <div className="Country-card-infos">
                <p>Population: { countryPopulation }</p>
                <p>Region: { countryRegion }</p>
                <p>Capital: { countryCapital } </p>
            </div>
            
        </div>
    )

}

export default CountryCard;