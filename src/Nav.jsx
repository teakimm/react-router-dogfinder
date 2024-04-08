import React from "react";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";


function Nav({ dogs }) {

    const dogLinks = dogs.map(dog =>
        <Link className="btn" to={`/dogs/${dog.name}`} key={uuid()}>{dog.name}</Link>
    );

    return (
        <div>
            {dogLinks}
        </div>
    );
}

export default Nav;