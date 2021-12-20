import { PEXEL_API_KEY } from "./constants";

export const fetchPexelApi = async (pageUrl: string) => {
  try {
    const response = await fetch(pageUrl, {
      headers: {
        Authorization: PEXEL_API_KEY,
      },
    });
    const pexelData = await response.json();

    return { pexelData };
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong");
  }
};
