/**
 * @jest-environment jsdom
 */
import React from "react";
import Home from "../pages/index";
import { PexelData } from "../types";
import { renderWithClient } from "./utils";

describe("Home", () => {
  let data: PexelData;

  beforeEach(() => {
    data = {
      page: 1,
      per_page: 10,
      photos: [
        {
          id: 10502143,
          width: 3398,
          height: 4247,
          url: "https://www.pexels.com/photo/woman-in-white-long-sleeve-shirt-sitting-on-red-leather-couch-10502143/",
          photographer: "Lany-Jade Mondou",
          photographer_url: "https://www.pexels.com/@lany",
          photographer_id: 135943481,
          avg_color: "#654B32",
          src: {
            original:
              "https://images.pexels.com/photos/10502143/pexels-photo-10502143.jpeg",
            large2x:
              "https://images.pexels.com/photos/10502143/pexels-photo-10502143.jpeg?auto=compress\u0026cs=tinysrgb\u0026dpr=2\u0026h=650\u0026w=940",
            large:
              "https://images.pexels.com/photos/10502143/pexels-photo-10502143.jpeg?auto=compress\u0026cs=tinysrgb\u0026h=650\u0026w=940",
            medium:
              "https://images.pexels.com/photos/10502143/pexels-photo-10502143.jpeg?auto=compress\u0026cs=tinysrgb\u0026h=350",
            small:
              "https://images.pexels.com/photos/10502143/pexels-photo-10502143.jpeg?auto=compress\u0026cs=tinysrgb\u0026h=130",
            portrait:
              "https://images.pexels.com/photos/10502143/pexels-photo-10502143.jpeg?auto=compress\u0026cs=tinysrgb\u0026fit=crop\u0026h=1200\u0026w=800",
            landscape:
              "https://images.pexels.com/photos/10502143/pexels-photo-10502143.jpeg?auto=compress\u0026cs=tinysrgb\u0026fit=crop\u0026h=627\u0026w=1200",
            tiny: "https://images.pexels.com/photos/10502143/pexels-photo-10502143.jpeg?auto=compress\u0026cs=tinysrgb\u0026dpr=1\u0026fit=crop\u0026h=200\u0026w=280",
          },
          liked: false,
          alt: "Woman in White Long Sleeve Shirt Sitting on Red Leather Couch",
        },
      ],
      total_results: 8000,
      next_page: "https://api.pexels.com/v1/curated/?page=3\u0026per_page=10",
      prev_page: "https://api.pexels.com/v1/curated/?page=1\u0026per_page=10",
    };
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
