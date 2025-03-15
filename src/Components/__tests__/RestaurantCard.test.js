import { render, screen } from "@testing-library/react";
import RestaurantCard, { withPromoted } from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

test("Should render RestaurantCard component with props Data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const name = screen.getByText("Chinese Wok");

  expect(name).toBeInTheDocument();
});

test("Should render RestaurantCard component with Promoted Label", () => {
  // Home Work - test HOC : withPromotedLabel()
  const RestaurantWithPromoted = withPromoted(RestaurantCard);
  render(<RestaurantWithPromoted resData={MOCK_DATA} />);

  const promoted = screen.getByText("Promoted");

  // console.log("promoted => ", promoted);

  expect(promoted).toBeInTheDocument();
});
