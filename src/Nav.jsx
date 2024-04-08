import React from "react";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";
import "./Nav.css"


function Nav({ dogs }) {

    const dogLinks = dogs.map(dog =>
        <Link className="btn" to={`/dogs/${dog.name}`} key={uuid()}>{dog.name}</Link>
    );

    return (
        <nav className="Nav">
            {dogLinks}
        </nav>
    );
}

export default Nav;