import searchIcon from "../../assets/ic_search.svg";
import styles from "./Input.module.css";

function Input({ value, placeholder, ...rest }) {
  return (
    <div className={styles.inputWrapper}>
      <img src={searchIcon}/>
      <input  className={styles.input} value={value} placeholder={placeholder} {...rest} />
    </div>
  );
}
export default Input;
