import searchIcon from "../../assets/ic_search.svg";

import styles from "./SearchInput.module.css";

function SearchInput({ value, placeholder, ...rest }) {
  return (
    <div className={styles.inputWrapper}>
      <img alt="장식용 돋보기 아이콘" src={searchIcon} />
      <input
        placeholder={placeholder}
        value={value}
        className={styles.input}
        {...rest}
      />
    </div>
  );
}
export default SearchInput;
