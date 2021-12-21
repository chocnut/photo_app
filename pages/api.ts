import { BASE_CURATED_URL, BASE_SEARCH_URL, PEXEL_API_KEY } from "./constants";

export const queryPexelApi = async ({
  queryKey,
}: {
  queryKey: [Record<string, unknown>, { page: string; searchValue: string }];
}) => {
  const [_key, { page, searchValue }] = queryKey;
  let url = `${BASE_CURATED_URL}?per_page=10&page=${page}`;

  if (searchValue) {
    url = `${BASE_SEARCH_URL}?query=${searchValue}&per_page=10&page=${page}`;
  }

  const requestHeaders: HeadersInit = new Headers();
  requestHeaders.set("Authorization", PEXEL_API_KEY);

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
