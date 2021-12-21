import styles from "../../../styles/Home.module.css";

type Props = {
  onSetPage: (value: number) => void;
  currentPage: number;
  isPreviousData: boolean;
  isLoading: boolean;
  nextPage: string;
  prevPage: string;
  isEmpty: boolean;
};

const Paginator = ({
  onSetPage,
  currentPage,
  isPreviousData,
  isLoading,
  nextPage,
  prevPage,
  isEmpty,
}: Props) => {
  const handlePrevPage = () => {
    const page = Math.max(currentPage - 1, 0);
    onSetPage(page);
  };

  const handleNextPage = () => {
    if (!isPreviousData && nextPage) {
      const page = currentPage + 1;
      onSetPage(page);
    }
  };

  if (isEmpty) {
    return null;
  }

  return (
    <div className={styles.pagination}>
      <button
        data-testid="prev"
        onClick={handlePrevPage}
        title="Previous Page"
        disabled={!prevPage}
      >
        ❮ &nbsp;
      </button>
      <button
        data-testid="next"
        onClick={handleNextPage}
        disabled={isLoading || isPreviousData || !nextPage}
        title="Next Page"
      >
        &nbsp; ❯
      </button>
    </div>
  );
};

export default Paginator;
