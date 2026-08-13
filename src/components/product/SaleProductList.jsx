import clsx from "clsx";

import { useState } from "react";
import useIsMobile from "../../hooks/useIsMobile";

import Button from "../ui/Button";
import Input from "../ui/Input";
import ProductCard from "./ProductCard";
import Dropdown from "../ui/Dropdown";
import Pagination from "../ui/Pagination";

import styles from "./SaleProductList.module.css";

const DROPDOWN_OPTIONS = [
  { value: "recent", label: "최신순" },
  { value: "favorite", label: "좋아요순" },
];

function SaleProductList() {
  const isMobile = useIsMobile();

  const [selectedValue, setSelectedValue] = useState(DROPDOWN_OPTIONS[0]);
  const [currentPage, setCurrentPage] = useState(1);

  const handleSelect = (value) => {
    setSelectedValue(value);
    console.log("서버 전송 value:", value);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
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
      {/* 상품 목록 영역 */}
      <ul className={styles.productList}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </ul>
      <Pagination
        totalItems={40}
        itemsPerPage={4}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </section>
  );
}
export default SaleProductList;
