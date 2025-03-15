const { render, fireEvent } = require("@testing-library/react");
import MOCK_DATA from "../mocks/mockResListData.json";
import Body from "../Body";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router";
import "@testing-library/jest-dom";

test("test test", () => {
  console.log("MOCK_DATA => ", MOCK_DATA);
});

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should Search Res List for burger input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeSearch = screen.getAllByTestId("resCard");

  expect(cardsBeforeSearch.length).toBe(8);

  const searchBtn = screen.getByRole("button", { name: "Search" });

  const searchInput = screen.getByTestId("searchInput");

  fireEvent.change(searchInput, { target: { value: "burger" } });

  expect(searchBtn).toBeInTheDocument();

  const cardsAfterSearch = screen.getAllByTestId("resCard");

  expect(cardsAfterSearch.length).toBe(5);
});

it("Should Filter Top Rated Restaurant", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeFilter = screen.getAllByTestId("resCard");

  expect(cardsBeforeFilter.length).toBe(8);

  const topRatedBtn = screen.getByRole("button", {
    name: "Top Rated Restaurants",
  });

  fireEvent.click(topRatedBtn);

  const cardsAfterFilter = screen.getAllByTestId("resCard");

  expect(cardsAfterFilter.length).toBe(3);

  // const searchBtn = screen.getByRole("button", { name: "Search" });

  // const searchInput = screen.getByTestId("searchInput");

  // fireEvent.change(searchInput, { target: { value: "burger" } });

  // expect(searchBtn).toBeInTheDocument();

  // const cardsAfterSearch = screen.getAllByTestId("resCard");

  // expect(cardsAfterSearch.length).toBe(5);
});
