import { useCallback, useState } from "react";
import { useQuery } from "react-query";

import { queryPexelApi } from "../../api";
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
      />
    </div>
  );
};

export default HomePage;
