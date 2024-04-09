import { describe, it, expect, vi } from "vitest";

import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Nav from "./Nav";
import { MemoryRouter } from "react-router-dom";
import RoutesList from "./RoutesList";

const DOGS = [
    {
        "name": "Whiskey",
        "age": 5,
        "src": "whiskey",
        "facts": [
            "Whiskey loves eating popcorn.",
            "Whiskey is a terrible guard dog.",
            "Whiskey wants to cuddle with you!"
        ]
    },
    {
        "name": "Duke",
        "age": 3,
        "src": "duke",
        "facts": [
            "Duke believes that ball is life.",
            "Duke likes snow.",
            "Duke enjoys pawing other dogs."
        ]
    },
    {
        "name": "Perry",
        "age": 4,
        "src": "perry",
        "facts": [
            "Perry loves all humans.",
            "Perry demolishes all snacks.",
            "Perry hates the rain."
        ]
    }
];


describe("nav component", function () {
    it("renders without crashing", function () {
        const { container, debug } = render(
            <MemoryRouter>
                <Nav dogs={DOGS} />
            </MemoryRouter>);

        debug(container);
    });
});