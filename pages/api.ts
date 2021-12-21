import { BASE_CURATED_URL, BASE_SEARCH_URL, PEXEL_API_KEY } from "./constants";

export const fetchCuratedPhotos = async (page = 1) => {
  const url = `${BASE_CURATED_URL}?per_page=10&page=${page}`;

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: PEXEL_API_KEY,
      },
    });
    const data = await response.json();

    return {
      data,
    };
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong");
  }
};

export const searchPhotos = async (query: string, page = 1) => {
  const url = `${BASE_SEARCH_URL}?query=${query}&per_page=10&page=${page}`;

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: PEXEL_API_KEY,
      },
    });
    const data = await response.json();

    return {
      data,
    };
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong");
  }
};
