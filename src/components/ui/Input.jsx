import clsx from "clsx";
import { forwardRef } from "react";
import styles from "./Input.module.css";

function Input({ label, id, error, ...rest }, ref) {
  return (
    <div className={styles.inputContainer}>
      <div className={styles.inputWrapper}>
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
        <input
          id={id}
          ref={ref}
          className={clsx(styles.input, error && styles.error)}
          {...rest}
        />
      </div>
      {error && <p className={styles.errorMessage}>{error.message}</p>}
    </div>
  );
}
export default forwardRef(Input);
