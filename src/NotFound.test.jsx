import { describe, it, expect, vi } from "vitest";

import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Nav from "./Nav";
import { MemoryRouter } from "react-router-dom";
import NotFound from "./NotFound";

describe("404 Not found component", function () {
    it("renders without crashing", function () {
        const { container, debug } = render(
            <MemoryRouter>
                <NotFound />
            </MemoryRouter>
        );
        debug(container);
    });
});