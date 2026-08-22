import clsx from "clsx";

import heartIcon from "../../assets/ic_heart.svg";
import defaultProductImg from "../../assets/img_product_default.png";

import styles from "./ProductCard.module.css";

function ProductCard({ item, varient }) {
  const imgUrl = item.images?.[0] || defaultProductImg;

  const handleImageError = (e) => {
    e.currentTarget.src = defaultProductImg;
  };

  return (
    <li className={clsx(styles.card, { [styles.best]: varient === "best" })}>
      {/* 이미지 영역 */}
      <div className={styles.cardImageWrapper}>
        <img
          alt={item.name}
          src={imgUrl}
          className={styles.cardImage}
          onError={handleImageError}
        />
      </div>
      {/* 컨텐츠 영역 */}
      <div className={styles.cardContent}>
        {/* TODO: price 클래스 필요 없으면 확인 후 삭제 */}
        <div className={clsx(styles.title, "text-md-medium")}>{item.name}</div>
        <div className={clsx(styles.price, "text-lg-bold")}>
          {item.price.toLocaleString()}원
        </div>
        <div className={clsx(styles.heart, "text-xs-medium")}>
          <img
            alt="하트모양 좋아요 아이콘"
            src={heartIcon}
            className={styles.heartIcon}
          />
          <span>{item.favoriteCount}</span>
        </div>
      </div>
    </li>
  );
}
export default ProductCard;
