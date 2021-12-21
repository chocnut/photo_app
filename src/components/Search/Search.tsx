import { useState } from "react";
import styles from "../../../styles/Home.module.css";

type Props = {
  onSearch: (value: string) => void;
};

const Search = ({ onSearch }: Props) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(searchValue);
  };

  return (
    <div className={styles.searchContainer}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className={styles.searchBox}
          placeholder="Search For a Photo.."
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
        />
        <button type="submit" className={styles.searchButton}>
          Go
        </button>
      </form>
    </div>
  );
};

export default Search;
