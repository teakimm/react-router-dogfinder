import './App.css';
import { BrowserRouter, Link } from 'react-router-dom';
import RoutesList from './RoutesList';
import { useState } from 'react';
import { v4 as uuid } from "uuid";

function DogDetails({ dogs }) {

    return (
        <div className="DogDetails">{dog.name}</div>
    );
};
export default DogDetails;