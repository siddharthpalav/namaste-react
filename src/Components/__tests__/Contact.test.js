import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Case", () => {
  beforeAll(() => {
    console.log("Before All");
  });

  beforeEach(() => {
    console.log("Before Each");
  });

  afterAll(() => {
    console.log("After All");
  });

  afterEach(() => {
    console.log("After Each");
  });

  it("Should load Contact us component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");

    //Assertions
    expect(heading).toBeInTheDocument();
  });

  it("Should load button inside Contact us component", () => {
    render(<Contact />);
    const button = screen.getByText("Submit");

    //Assertions
    expect(button).toBeInTheDocument();
  });

  it("Should load input name inside Contact component", () => {
    render(<Contact />);
    const input = screen.getByPlaceholderText("name");

    //Assertions
    expect(input).toBeInTheDocument();
  });

  it("Should load 2 input boxes inside the Contact component", () => {
    render(<Contact />);

    // Querying
    const inputBoxes = screen.getAllByRole("textbox");

    //   console.log("typeof inputBoxes => ", typeof inputBoxes);
    //   console.log("length of inputBoxes => ", inputBoxes.length);

    //   console.log(inputBoxes);

    expect(inputBoxes.length).toBe(2);
  });
});
