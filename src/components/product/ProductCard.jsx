import clsx from "clsx";

import heartIcon from "../../assets/ic_heart.svg";
import defultProductImg from "../../assets/product.png";

import styles from "./ProductCard.module.css";

function ProductCard({ varient }) {
  return (
    <li className={clsx(styles.card, { [styles.best]: varient === "best" })}>
      {/* 이미지 영역 */}
      <div className={styles.cardImageWrapper}>
        <img src={defultProductImg} className={styles.cardImage} />
      </div>
      {/* 컨텐츠 영역 */}
      <div className={styles.cardContent}>
        {/* TODO: title, price 클래스 필요 없으면 확인 후 삭제 */}
        <div className={clsx(styles.title, "text-md-medium")}>
          아이패드 미니 팝니다
        </div>
        <div className={clsx(styles.price, "text-lg-bold")}>500,000원</div>
        <div className={clsx(styles.heart, "text-xs-medium")}>
          <img
            src={heartIcon}
            alt="하트모양 좋아요 아이콘"
            className={styles.heartIcon}
          />
          <span>240</span>
        </div>
      </div>
    </li>
  );
}
export default ProductCard;
