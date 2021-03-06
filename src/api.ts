import { BASE_CURATED_URL, BASE_SEARCH_URL, PEXEL_API_KEY } from "./constants";

export const queryPexelApi = async ({ queryKey }: { queryKey: unknown }) => {
  const [_key, { page, searchValue }] = queryKey as [
    string,
    { page: number; searchValue: string }
  ];
  let url = `${BASE_CURATED_URL}?per_page=10&page=${page}`;

  if (searchValue) {
    url = `${BASE_SEARCH_URL}?query=${searchValue}&per_page=10&page=${page}`;
  }

  const apiKey = PEXEL_API_KEY || "";

  const requestHeaders: HeadersInit = new Headers();
  requestHeaders.set("Authorization", apiKey);

  try {
    const response = await fetch(url, {
      headers: requestHeaders,
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
