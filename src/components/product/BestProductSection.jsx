import clsx from "clsx";

import useDeviceType from "../../hooks/useDeviceType";

import ErrorView from "../error/ErrorView";
import Spinner from "../ui/Spinner";
import ProductCard from "./ProductCard";

import styles from "./BestProductSection.module.css";

function BestProductSection() {
  // 임시처리
  const products = [
    {
      id: 1,
      name: "베스트 상품1",
      price: 9900,
      createdAt: "2026-08-29T12:53:17.365Z",
    },
    {
      id: 2,
      name: "베스트 상품2",
      price: 29900,
      createdAt: "2026-08-29T12:53:17.365Z",
    },
    {
      id: 3,
      name: "베스트 상품3",
      price: 39900,
      createdAt: "2026-08-29T12:53:17.365Z",
    },
    {
      id: 4,
      name: "베스트 상품4",
      price: 49900,
      createdAt: "2026-08-29T12:53:17.365Z",
    },
  ];
  const isLoading = false;
  const error = false;

  const { device } = useDeviceType();

  const displayCount = device === "MOBILE" ? 1 : device === "TABLET" ? 2 : 4;
  const minHeight = device === "PC" ? 378 : 434;

  const displayProducts = products.slice(0, displayCount);

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
