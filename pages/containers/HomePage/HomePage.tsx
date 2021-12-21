import { useState } from "react";
import { useQuery } from "react-query";

import { fetchCuratedPhotos, searchPhotos } from "../../api";
import { PexelData } from "../../../types";

import styles from "../../../styles/Home.module.css";

import { PhotoList } from "../../components/PhotoList";
import { Search } from "../../components/Search";
import { Paginator } from "../../components/Paginator";

type Props = {
  photoData: {
    data: PexelData;
  };
};

const HomePage = ({ photoData }: Props) => {
  const [page, setPage] = useState(photoData.data.page);
  const [searchValue, setSearchValue] = useState("");

  const getQueryFn = (page: number) => {
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
    initialData: photoData,
    keepPreviousData: true,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  return (
    <div className={styles.container}>
      <Search
        refetch={refetch}
        onSetValue={setSearchValue}
        value={searchValue}
      />
      <PhotoList photos={data.photos} />
      <Paginator
        onSetPage={setPage}
        currentPage={page}
        isPreviousData={isPreviousData}
        isLoading={isLoading}
        nextPage={data?.next_page}
      />
    </div>
  );
};

export default HomePage;
