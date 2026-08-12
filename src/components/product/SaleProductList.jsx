import clsx from "clsx";

import Button from "../ui/Button";
import Input from "../ui/Input";
import ProductCard from "./ProductCard";

import styles from "./SaleProductList.module.css";
import Dropdown from "../ui/Dropdown";
import Pagination from "../ui/Pagination";
import { useState } from "react";

function SaleProductList() {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  return (
    <section className={styles.productWrapper}>
      <div className={styles.productHeader}>
        <div className={styles.titleWrapper}>
          <h2 className={clsx(styles.title, "text-xl-bold")}>판매 중인 상품</h2>
          <Button size="sm40">상품 등록하기</Button>
        </div>
        <div className={styles.searchWrapper}>
          {/* 상품 검색 input(Input 컴포넌트 사용) */}
          <Input placeholder="검색할 상품을 입력해주세요" />
          <Dropdown />
        </div>
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
