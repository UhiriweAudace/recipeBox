import React from "react";
import { render,  cleanup } from "@testing-library/react";
import App from "../App";

beforeEach(() => { });

afterEach(() => {
    cleanup();
});
const renderApp = () => render(<App />);

test("Render the App", async () => {
    const { getByTestId } = renderApp();
    expect(getByTestId("app")).toBeInTheDocument();
});
