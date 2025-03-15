import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter, Link } from "react-router";
import "@testing-library/jest-dom";

test("Should render Header component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // one way to find login button
  const loginButton = screen.getByRole("button", { name: "Login" });

  // another way to get the login button but this is not a good way
  //   const loginButton = screen.getByText("Login");

  expect(loginButton).toBeInTheDocument();
});

test("Should render Header component with Cart Items 0  ", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // one way to find login button
  const cartItems = screen.getByText("Cart - (0 Items)");

  // another way to get the login button but this is not a good way
  //   const loginButton = screen.getByText("Login");

  expect(cartItems).toBeInTheDocument();
});

test("Should change Login Button to Logout on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // one way to find login button
  const logingButton = screen.getByRole("button", { name: "Login" });

  // fire a click event
  fireEvent.click(logingButton);

  const logoutButton = screen.getByRole("button", { name: "Logout" });

  expect(logoutButton).toBeInTheDocument();
});
