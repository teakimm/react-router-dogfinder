import './App.css';
import { BrowserRouter, Link } from 'react-router-dom';
import RoutesList from './RoutesList';
import { useState } from 'react';
import { v4 as uuid } from "uuid";
import './DogList.css';


/** Renders cards for all dogs
 *
 * state:
 * none
 *
 * props:
 * -dogs: [{name, age, ...}]
 *
 * App -> RoutesList -> DogList
 */
function DogList({ dogs }) {
    const dogCards = dogs.map(dog =>
        <div key={dog.name} className="card" style={{ width: '18em' }}>
            <img className="card-img-top" src={`/public/${dog.src}.jpg`} alt={dog.src} />
            <div className="card-body">
                <h5 className="card-title">{dog.name}</h5>
                <Link className="btn btn-primary" to={`/dogs/${dog.name.toLowerCase()}`}>{`More about ${dog.name}`}</Link>
            </div>
        </div>
    );

    return (
        <div className="DogList">{dogCards}</div>
    );
};
export default DogList;