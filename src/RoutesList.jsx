import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";


function RoutesList() {
    return (
        <Routes>
            <Route path="*" element={<Navigate to="/dogs" />} />
        </Routes>
    );
}

export default RoutesList;