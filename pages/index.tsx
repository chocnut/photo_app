import type { NextPage } from "next";
import { useCallback, useState } from "react";
import styles from "../styles/Home.module.css";
import { PhotoList } from "./components/PhotoList";
import { Search } from "./components/Search";
import { BASE_CURATED_URL, BASE_SEARCH_URL } from "./constants";
import { fetchPexelApi } from "./api";

const Home: NextPage = ({ data }) => {
  const [prevPageUrl, setPrevPageUrl] = useState(data.prev_page);
  const [nextPageUrl, setNextPageUrl] = useState(data.next_page);
  const [photos, setPhotos] = useState(data.photos);
  const [searchValue, setSearchValue] = useState("");

  const handlePaginate = async (e, pageUrl) => {
    e.preventDefault();

    const { pexelData } = await fetchPexelApi(pageUrl);

    setPhotos(pexelData.photos);
    setNextPageUrl(pexelData.next_page);
    setPrevPageUrl(pexelData.prev_page);
  };

  const handleSearch = useCallback(async () => {
    if (!searchValue.length) return;

    const url = `${BASE_SEARCH_URL}?query=${searchValue}&per_page=10`;

    const { pexelData } = await fetchPexelApi(url);
    setPhotos(pexelData.photos);
    setNextPageUrl(pexelData.next_page);
    setPrevPageUrl(pexelData.prev_page);
  }, [searchValue]);

  return (
    <main>
      <div className={styles.container}>
        <Search
          onSearch={handleSearch}
          onSetValue={setSearchValue}
          value={searchValue}
        />
        <PhotoList photos={photos} />
        <div className={styles.pagination}>
          <button
            onClick={(e) => handlePaginate(e, prevPageUrl)}
            title="Previous Page"
            disabled={!prevPageUrl?.length}
          >
            ❮ &nbsp;
          </button>
          <button
            onClick={(e) => handlePaginate(e, nextPageUrl)}
            title="Next Page"
          >
            &nbsp; ❯
          </button>
        </div>
      </div>
    </main>
  );
};

export async function getServerSideProps() {
  const url = `${BASE_CURATED_URL}?per_page=10`;
  const { pexelData } = await fetchPexelApi(url);

  return { props: { data: pexelData } };
}

export default Home;
