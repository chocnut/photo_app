import { UseQueryResult } from "react-query/types/react/types";
import styles from "../../../styles/Home.module.css";

type Props = {
  refetch: () => Promise<UseQueryResult>;
  onSetValue: (value: string) => void;
  value: string;
};
const Search = ({ refetch, onSetValue, value }: Props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    refetch();
  };

  return (
    <div className={styles.searchContainer}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className={styles.searchBox}
          placeholder="Search For a Photo.."
          onChange={(e) => onSetValue(e.target.value)}
          value={value}
        />
        <button type="submit" className={styles.searchButton}>
          Go
        </button>
      </form>
    </div>
  );
};

export default Search;
