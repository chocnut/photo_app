import { useCallback, useState } from "react";
import { useQuery } from "react-query";

import { queryPexelApi } from "../../src/api";
import { PexelData } from "../../src/types";

import styles from "../../styles/Home.module.css";

import { PhotoList } from "../../src/components/PhotoList";
import { Search } from "../../src/components/Search";
import { Paginator } from "../../src/components/Paginator";

type Props = {
  photoData: {
    data: PexelData;
  };
};

const HomePage = ({ photoData }: Props) => {
  const [page, setPage] = useState(photoData.data.page);
  const [searchValue, setSearchValue] = useState("");

  const { isLoading, data, isPreviousData } = useQuery(
    ["photos", { page, searchValue }],
    queryPexelApi,
    {
      initialData: photoData,
      keepPreviousData: true,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  );

  const handleSearch = (searchValue: string) => {
    setSearchValue(searchValue);
  };

  return (
    <div className={styles.container}>
      <Search onSearch={handleSearch} />
      <PhotoList photos={data?.data.photos} />
      <Paginator
        onSetPage={setPage}
        currentPage={page}
        isPreviousData={isPreviousData}
        isLoading={isLoading}
        nextPage={data?.data?.next_page}
        prevPage={data?.data?.prev_page}
        isEmpty={data?.data.photos.length === 0}
      />
    </div>
  );
};

export default HomePage;
