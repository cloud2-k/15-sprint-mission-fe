import clsx from "clsx";

import { useState } from "react";
import useDeviceType from "../../hooks/useDeviceType";
import useProducts from "../../hooks/useProducts";

import Button from "../ui/Button";
import Input from "../ui/Input";
import ProductCard from "./ProductCard";
import Dropdown from "../ui/Dropdown";
import Pagination from "../ui/Pagination";

import styles from "./SaleProductList.module.css";
import Spinner from "../ui/Spinner";
import ErrorView from "../ui/ErrorView";

const DROPDOWN_OPTIONS = [
  { value: "recent", label: "최신순" },
  { value: "favorite", label: "좋아요순" },
];

function SaleProductList() {
  const { device, isMobile } = useDeviceType();
  const [selectedValue, setSelectedValue] = useState(DROPDOWN_OPTIONS[0]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = device === "MOBILE" ? 4 : device === "TABLET" ? 6 : 10;
  const { products, totalCount, isLoading, error, refetch } = useProducts({
    page: currentPage,
    pageSize: pageSize,
    orderBy: selectedValue.value,
  });

  const minHeight = device === "MOBILE" ? 668 : device === "TABLET" ? 740 : 674;

  const handleSelect = (value) => {
    setSelectedValue(value);
    refetch({
      page: currentPage,
      pageSize: pageSize,
      orderBy: value.value,
    });
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    refetch({
      page: newPage,
      pageSize: pageSize,
      orderBy: selectedValue.value,
    });
  };

  const titleElement = (
    <h2 className={clsx(styles.title, "text-xl-bold")}>판매 중인 상품</h2>
  );

  const buttonElement = <Button size="sm40">상품 등록하기</Button>;

  const searchElements = <Input placeholder="검색할 상품을 입력해주세요" />;

  const dropdownElements = (
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
              {searchElements}
              {dropdownElements}
            </div>
          </>
        ) : (
          <>
            <div className={styles.titleWrapper}>{titleElement}</div>
            <div className={styles.searchWrapper}>
              {searchElements}
              {buttonElement}
              {dropdownElements}
            </div>
          </>
        )}
      </div>
      {isLoading ? (
        <Spinner minHeight={minHeight} />
      ) : error ? (
        <ErrorView minHeight={minHeight} message={error} />
      ) : (
        <ul className={styles.productList}>
          {products.map((product) => (
            <ProductCard key={product.id} item={product} />
          ))}
        </ul>
      )}
      <Pagination
        totalItems={totalCount}
        itemsPerPage={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </section>
  );
}
export default SaleProductList;
