import styles from "../../../styles/Home.module.css";

const Search = ({ onSearch, onSetValue, value }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch();
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
