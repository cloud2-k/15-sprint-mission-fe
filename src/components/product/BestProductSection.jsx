import clsx from "clsx";
import { useState } from "react";

import useDeviceType from "../../hooks/useDeviceType";
import useProducts from "../../hooks/useProducts";

import ErrorView from "../ui/ErrorView";
import Spinner from "../ui/Spinner";
import ProductCard from "./ProductCard";

import styles from "./BestProductSection.module.css";

function BestProductSection() {
  const { products, isLoading, error } = useProducts({
    page: 1,
    pageSize: 10,
    orderBy: "favorite",
  });
  const { device } = useDeviceType();

  const [displayCount] = useState(
    device === "MOBILE" ? 1 : device === "TABLET" ? 2 : 4,
  );

  const displayProducts = products.slice(0, displayCount);

  const minHeight = device === "PC" ? 378 : 434;

  return (
    <section className={styles.bestProduct}>
      <h2 className={clsx(styles.title, "text-xl-bold")}>베스트 상품</h2>
      {isLoading ? (
        <Spinner minHeight={minHeight} />
      ) : error ? (
        <ErrorView message={error} minHeight={minHeight} />
      ) : (
        <ul className={styles.productList}>
          {displayProducts.map((product) => (
            <ProductCard key={product.id} item={product} varient="best" />
          ))}
        </ul>
      )}
    </section>
  );
}
export default BestProductSection;
