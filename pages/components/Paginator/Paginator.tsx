import styles from "../../../styles/Home.module.css";

type Props = {
  onSetPage: (value: number) => void;
  currentPage: number;
  isPreviousData: boolean;
  isLoading: boolean;
  nextPage: string;
};

const Paginator = ({
  onSetPage,
  currentPage,
  isPreviousData,
  isLoading,
  nextPage,
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

  return (
    <div className={styles.pagination}>
      <button
        data-testid="prev"
        onClick={handlePrevPage}
        title="Previous Page"
        disabled={currentPage === 0}
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
