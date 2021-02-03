import React from "react";
import { render, screen, act, cleanup, getByTestId } from "@testing-library/react";
import MainHeader from "../../components/MainHeader";

describe("MainHeader Component", () => {
    it("Render correctly", () => {
        const { getByTestId } = render(<MainHeader />);
        expect(getByTestId("header")).toBeInTheDocument();
    });
});
