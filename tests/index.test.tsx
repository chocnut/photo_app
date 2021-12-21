/**
 * @jest-environment jsdom
 */
import React from "react";
import Home from "../pages/index";
import { PexelData } from "../types";
import { renderWithClient } from "./utils";
import pexels from "./__mocks__/pexel";

describe("Home", () => {
  let data: PexelData;

  beforeEach(() => {
    data = pexels;
  });

  test("successful renders the component", async () => {
    const result = renderWithClient(<Home data={data} />);

    expect(
      await result.getByPlaceholderText("Search For a Photo..")
    ).toBeInTheDocument();

    expect(
      await result.getByText("Go", { selector: "button" })
    ).toBeInTheDocument();
  });

  test("I can see an initial set of curated photos on the home screen", () => {
    const result = renderWithClient(<Home data={data} />);

    const photo = result.getByRole("img");
    expect(photo).toBeInTheDocument();
    expect(photo).toHaveAttribute("alt", data.photos[0].alt);
  });

  test("I am able to access the the photographer’s name and url if those details are available for every photo", async () => {
    const result = renderWithClient(<Home data={data} />);

    const photographer = result.getByTestId("photographer-name");
    const photographerUrl = result.getByTestId("photographer-url");

    expect(photographer).toHaveTextContent(data.photos[0].photographer);
    expect(photographerUrl).toHaveTextContent(data.photos[0].photographer_url);
  });
});
