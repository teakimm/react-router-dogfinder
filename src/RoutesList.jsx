import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import DogList from "./DogList";
import DogDetails from "./DogDetails";


function RoutesList({ dogs }) {
    return (
        <Routes>
            <Route path="*" element={<Navigate to="/dogs" />} />
            <Route path="dogs/:name" element={<DogDetails dogs={dogs} />} />
            <Route path="/dogs" element={<DogList dogs={dogs} />} />
        </Routes>
    );
}

export default RoutesList;