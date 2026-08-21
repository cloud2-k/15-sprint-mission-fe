import searchIcon from "../../assets/ic_search.svg";
import styles from "./SearchInput.module.css";

function SearchInput({ value, placeholder, ...rest }) {
  return (
    <div className={styles.inputWrapper}>
      <img src={searchIcon} alt="장식용 돋보기 아이콘" />
      <input
        className={styles.input}
        value={value}
        placeholder={placeholder}
        {...rest}
      />
    </div>
  );
}
export default SearchInput;
