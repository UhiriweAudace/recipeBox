import React from "react";
import { render, screen, act, cleanup } from "@testing-library/react";
import App from "../App";

beforeEach(() => {});

afterEach(() => {
    cleanup();
    jest.resetAllMocks();
});
const renderApp = () => render(<App />);

test("Render the App", async () => {
    const { findByTestId,getByTestId } = renderApp();
    expect(getByTestId("app")).toBeInTheDocument();
});
