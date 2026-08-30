import clsx from "clsx";
import { useState } from "react";

import useDeviceType from "../../hooks/useDeviceType";
import useProducts from "../../hooks/useProducts";

import { ROUTES } from "../../constants/routes";
import ErrorView from "../error/ErrorView";
import Button from "../ui/Button";
import Dropdown from "../ui/Dropdown";
import Pagination from "../ui/Pagination";
import SearchInput from "../ui/SearchInput";
import Spinner from "../ui/Spinner";
import ProductCard from "./ProductCard";

import styles from "./SaleProductList.module.css";

const DROPDOWN_OPTIONS = [
  { value: "recent", label: "최신순" },
  { value: "favorite", label: "좋아요순" },
];

const DEVICE_CONFIG = {
  MOBILE: { pageSize: 4, minHeight: 668 },
  TABLET: { pageSize: 6, minHeight: 740 },
  PC: { pageSize: 10, minHeight: 674 },
};

function SaleProductList() {
  const { device, isMobile } = useDeviceType();

  const [selectedValue, setSelectedValue] = useState(DROPDOWN_OPTIONS[0]);
  const [currentPage, setCurrentPage] = useState(1);
  const [prevPageSize, setPrevPageSize] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");

  const { pageSize, minHeight } = DEVICE_CONFIG[device] ?? DEVICE_CONFIG.PC;

  if (prevPageSize !== pageSize) {
    setPrevPageSize(pageSize);
    if (prevPageSize !== null) {
      setCurrentPage(1);
    }
  }

  const { products, totalCount, isLoading, error } = useProducts({
    page: currentPage,
    limit: pageSize,
    orderBy: selectedValue.value,
    keyword: searchKeyword,
  });

  const handleSelect = (opt) => {
    setSelectedValue(opt);
    setCurrentPage(1);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleKeywordChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchKeyword(inputValue);
    setCurrentPage(1);
  };

  const titleElement = (
    <h2 className={clsx(styles.title, "text-xl-bold")}>판매 중인 상품</h2>
  );

  const buttonElement = (
    <Button size="sm40" to={ROUTES.PRODUCT_REGISTRATION}>
      상품 등록하기
    </Button>
  );

  const searchElement = (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <SearchInput
        aria-label="상품 검색"
        placeholder="검색할 상품을 입력해주세요"
        value={inputValue}
        onChange={handleKeywordChange}
      />
    </form>
  );

  const dropdownElement = (
    <Dropdown
      options={DROPDOWN_OPTIONS}
      selectedValue={selectedValue}
      onSelect={handleSelect}
    />
  );

  return (
    <section className={styles.productWrapper}>
      <div className={styles.productHeader}>
        {isMobile ? (
          <>
            <div className={styles.titleWrapper}>
              {titleElement}
              {buttonElement}
            </div>
            <div className={styles.searchWrapper}>
              {searchElement}
              {dropdownElement}
            </div>
          </>
        ) : (
          <>
            <div className={styles.titleWrapper}>{titleElement}</div>
            <div className={styles.searchWrapper}>
              {searchElement}
              {buttonElement}
              {dropdownElement}
            </div>
          </>
        )}
      </div>
      {isLoading ? (
        <Spinner minHeight={minHeight} />
      ) : error ? (
        <ErrorView message={error} minHeight={minHeight} />
      ) : (
        <ul className={styles.productList}>
          {products.map((product) => (
            <ProductCard key={product.id} item={product} />
          ))}
        </ul>
      )}
      <Pagination
        currentPage={currentPage}
        itemsPerPage={pageSize}
        totalItems={totalCount}
        onPageChange={handlePageChange}
      />
    </section>
  );
}
export default SaleProductList;
