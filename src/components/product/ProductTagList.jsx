import deleteIcon from "../../assets/ic_delete.svg";

import styles from "./ProductTagList.module.css";

function ProductTagList({ tags, onRemove }) {
  if (tags.length === 0) return null;
  
  return (
    <ul className={styles.tagList}>
      {tags.map((tag) => (
        <li key={tag} className={styles.tagChip}>
          <span className={styles.tagText}>#{tag}</span>
          <button type="button" onClick={() => onRemove(tag)}>
            <img alt="태그 삭제 버튼 아이콘" src={deleteIcon} />
          </button>
        </li>
      ))}
    </ul>
  );
}
export default ProductTagList;
