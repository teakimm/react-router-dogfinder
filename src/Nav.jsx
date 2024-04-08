import React from "react";
import { NavLink } from "react-router-dom";
import { v4 as uuid } from "uuid";
import "./Nav.css";

/** Navbar
 *
 * state:
 * none
 *
 * props:
 * -dogs: [{name, age, ...}]
 *
 * App -> Navbar
 */
function Nav({ dogs }) {

    const dogLinks = dogs.map(dog =>
        <NavLink className="NavLink" to={`/dogs/${dog.name.toLowerCase()}`} key={dog.name}>{dog.name}</NavLink>
    );

    return (
        <nav className="Nav">
            {dogLinks}
        </nav>
    );
}

export default Nav;