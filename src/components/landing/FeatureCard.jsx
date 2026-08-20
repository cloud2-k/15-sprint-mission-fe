import clsx from "clsx";

import styles from "./FeatureCard.module.css";

function FeatureCard({ reverse, imageUrl, imageAlt, tag, title, description }) {
  return (
    <li className={clsx(styles.card, reverse && styles.reverse)}>
      <div className={styles.imageWrapper}>
        <img src={imageUrl} alt={imageAlt} className={styles.cardImage} />
      </div>
      <div className={styles.textWrapper}>
        <div className={styles.titleWrapper}>
          <span className={styles.tag}>{tag}</span>
          <h3 className={styles.title}>{title}</h3>
        </div>
        <p className={styles.desc}>{description}</p>
      </div>
    </li>
  );
}
export default FeatureCard;
