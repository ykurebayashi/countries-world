import React from "react";

function Header(props) {
    const { name } = props;
    return(
        <div className="Header">
            <h1>Where in the world?</h1>
            <h2>{name} Section</h2>
            <button>Dark Mode</button>
        </div>
    )

}

export default Header;