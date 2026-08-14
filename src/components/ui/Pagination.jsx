import clsx from "clsx";
import prevIcon from "../../assets/ic_arrow_left.svg";
import nextIcon from "../../assets/ic_arrow_right.svg";

import styles from "./Pagination.module.css";

function Pagination({ totalItems, itemsPerPage, currentPage, onPageChange }) {
  // 한번에 보여줄 페이지 묶음 개수
  const PAGE_GROUP_SIZE = 5;

  // 총 페이지 수
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // 현재 페이지가 속한 그룹 계산
  const currentGroup = Math.ceil(currentPage / PAGE_GROUP_SIZE);

  // 현재 그룹의 시작페이지, 끝페이지
  const startPage = (currentGroup - 1) * PAGE_GROUP_SIZE + 1;
  const endPage = Math.min(startPage + PAGE_GROUP_SIZE - 1, totalPages);

  // 페이지 배열
  const pageNumbers = Array.from(
    { length: PAGE_GROUP_SIZE },
    (_, i) => i + startPage,
  );

  return (
    <div className={styles.paginationWrapper}>
      <div className={styles.paginationContent}>
        <button
          className={styles.pageButton}
          onClick={() => onPageChange(startPage - 1)}
          disabled={startPage === 1}
        >
          <img src={prevIcon} />
        </button>
        {pageNumbers.map((page) => (
          <button
            key={page}
            className={clsx(styles.pageButton, {
              [styles.active]: page === currentPage,
            })}
            onClick={() => onPageChange(page)}
          >
            <span className="text-lg-semibold">{page}</span>
          </button>
        ))}

        <button
          className={styles.pageButton}
          onClick={() => onPageChange(endPage + 1)}
          disabled={endPage === totalPages}
        >
          <img src={nextIcon} />
        </button>
      </div>
    </div>
  );
}
export default Pagination;
