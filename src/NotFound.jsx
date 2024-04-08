import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";


/** 404 page for a non-existent dog
 *
 * props:
 * none
 *
 * state:
 * none
 *
 * DogDetails -> NotFound
 */
function NotFound() {
    return (
        <div className="NotFound">
            We couldn't find the dog you were looking for.
            <br />
            <Link className="NotFound-btn btn btn-primary" to={`/dogs`}>Go Back?</Link>
        </div>
    );
}

export default NotFound;