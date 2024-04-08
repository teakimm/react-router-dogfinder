import './App.css';
import { BrowserRouter, Link, Navigate, Route } from 'react-router-dom';
import RoutesList from './RoutesList';
import { useState } from 'react';
import { v4 as uuid } from "uuid";
import { useParams } from 'react-router-dom';
import "./DogDetails.css";
import NotFound from './NotFound';

/** Renders card for a dog
 *
 * state:
 * none
 *
 * props:
 * -dogs [{name, age, ...}]
 *
 * App -> RouteList -> DogDetails
 */
function DogDetails({ dogs }) {
    const { name } = useParams();
    const dog = dogs.find(dog => dog.name.toLowerCase() === name.toLowerCase());

    if (!dog) {
        return <NotFound />;
    }

    return (
        <div className="DogDetails">
            <div className="card DogDetails-card" style={{ width: '25em' }}>
                <img className="card-img-top" src={`/public/${dog.src}.jpg`} alt={dog.src} />
                <div className="card-body">
                    <h5 className="card-title">{dog.name}</h5>
                    <h6>Age: {dog.age}</h6>
                    <ul>
                        {dog.facts.map((fact, idx) => <li key={idx}>{fact}</li>)}
                    </ul>
                    <Link className="btn btn-primary" to={`/dogs`}>Go Back</Link>
                </div>
            </div>
        </div>
    );
};
export default DogDetails;