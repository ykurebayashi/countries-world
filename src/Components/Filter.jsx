import React, { useContext } from "react";
import GlobalContext from "../Context/GlobalContext";

// eslint-disable-next-line no-unused-vars
function Filter() {
    const { textFilter, setTextFilter, dropDown, setDropDownValue } = useContext(GlobalContext);

    function handleChange(e) {
        setTextFilter(e.target.value)
    }

    function handleDropDown(e){
        setDropDownValue(e.target.value);
    }

    return(
        <form className="filter-form">
            <input
              type="text"
              placeholder="Type the desired country"
              name="textFilter"
              value={ textFilter }
              onChange={ e => handleChange(e) }
            />
            {console.log(dropDown)}

            <select
                value={ dropDown }
                onChange={ (e) => handleDropDown(e) }
            >
                <option value="All">All</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </form>
    )
}

export default Filter;