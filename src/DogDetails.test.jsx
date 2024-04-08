import { describe, it, expect, vi } from "vitest";

import React from "react";
import { render, fireEvent } from "@testing-library/react";
import DogDetails from "./DogDetails";
import "../db.json";
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

describe("DogDetails component", function () {
    it("renders without crashing", function () {
        const { container, debug } = render(
            <MemoryRouter initialEntries={["/dogs/Perry"]}>
                <RoutesList dogs={DOGS} />
            </MemoryRouter>
        );
    });

    it("matches snapshot", function () {
        const { container, debug } = render(
            <MemoryRouter initialEntries={["/dogs/Perry"]}>
                <RoutesList dogs={DOGS} />
            </MemoryRouter>
        );
        expect(container).toMatchSnapshot();
    });

    it("renders correct dog information", function () {
        const result = render(
            <MemoryRouter initialEntries={["/dogs/Perry"]}>
                <RoutesList dogs={DOGS} />
            </MemoryRouter>
        );

        expect(result.queryByText("Perry loves all humans.")).toBeInTheDocument();
        expect(result.queryByText("Duke likes snow.")).not.toBeInTheDocument();
    });

    it("displays 404 on non-existent dog", function () {
        const result = render(
            <MemoryRouter initialEntries={["/dogs/David"]}>
                <RoutesList dogs={DOGS} />
            </MemoryRouter>
        );

        expect(result.queryByText(
            "We couldn't find the dog you were looking for.")).toBeInTheDocument();
    });
});