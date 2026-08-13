import clsx from "clsx";

import ProductCard from "./ProductCard";
import styles from "./BestProductSection.module.css";

function BestProductSection() {
  return (
    <section className={styles.bestProduct}>
      <h2 className={clsx(styles.title, "text-xl-bold")}>베스트 상품</h2>
      <ul className={styles.productList}>
        <ProductCard varient="best" />
        <ProductCard varient="best" />
        <ProductCard varient="best" />
        <ProductCard varient="best" />
      </ul>
    </section>
  );
}
export default BestProductSection;
