import type { NextPage } from "next";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import { useQuery } from "react-query";
import { PhotoList } from "./components/PhotoList";
import { Search } from "./components/Search";
import { fetchCuratedPhotos, searchPhotos } from "./api";
import { PexelData } from "../types";

type Props = {
  data: PexelData;
};

const Home: NextPage<Props> = (props) => {
  const [page, setPage] = useState(props.data.page);
  const [searchValue, setSearchValue] = useState("");

  const getQueryFn = (page) => {
    if (searchValue.length > 0) {
      return searchPhotos(searchValue, page);
    }

    return fetchCuratedPhotos(page);
  };

  const {
    refetch,
    isLoading,
    data: { data },
    isPreviousData,
  } = useQuery(["photos", page], () => getQueryFn(page), {
    initialData: props,
    keepPreviousData: true,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  return (
    <main>
      <div className={styles.container}>
        <Search
          refetch={refetch}
          onSetValue={setSearchValue}
          value={searchValue}
        />
        <PhotoList photos={data.photos} />
        <div className={styles.pagination}>
          <button
            data-testid="prev"
            onClick={() => setPage((old) => Math.max(old - 1, 0))}
            title="Previous Page"
            disabled={page === 0}
          >
            ❮ &nbsp;
          </button>
          <button
            data-testid="next"
            onClick={() => {
              if (!isPreviousData && data.next_page) {
                setPage((old) => old + 1);
              }
            }}
            disabled={isLoading || isPreviousData || !data?.next_page}
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
  const { data } = await fetchCuratedPhotos();

  return {
    props: { data },
  };
}

export default Home;
