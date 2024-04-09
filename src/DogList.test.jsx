import { describe, it, expect, vi } from "vitest";

import React from "react";
import { render, fireEvent } from "@testing-library/react";
import DogList from "./DogList";;
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

describe("DogList component", function () {
    it("renders without crashing", function () {
        const { container } = render(
            <MemoryRouter initialEntries={["/dogs"]}>
                <RoutesList dogs={DOGS} />
            </MemoryRouter>
        );


    });

    it("matches snapshot", function () {
        const { container, debug } = render(
            <MemoryRouter initialEntries={["/dogs"]}>
                <RoutesList dogs={DOGS} />
            </MemoryRouter>
        );

        expect(container).toMatchSnapshot();
    });

    it("renders correct dog information", function () {
        const result = render(
            <MemoryRouter initialEntries={["/dogs"]}>
                <RoutesList dogs={DOGS} />
            </MemoryRouter>
        );

        expect(result.queryByText("More about Perry")).toBeInTheDocument();
        expect(result.queryByText("More about Duke")).toBeInTheDocument();
        expect(result.queryByText("More about Whiskey")).toBeInTheDocument();

        expect(
            result.container.querySelectorAll(".card").length
        ).toEqual(3);
    });

    it("link to specific dog works", function () {
        const result = render(
            <MemoryRouter initialEntries={["/dogs"]}>
                <RoutesList dogs={DOGS} />
            </MemoryRouter>
        );

        const dukeLink = result.container.querySelector(".Duke");
        fireEvent.click(dukeLink);


        expect(result.queryByText("Duke believes that ball is life.")).toBeInTheDocument();
        expect(result.queryByText("Duke likes snow.")).toBeInTheDocument();
        expect(result.queryByText("Duke enjoys pawing other dogs.")).toBeInTheDocument();
    });
});
