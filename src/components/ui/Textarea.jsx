import clsx from "clsx";
import { forwardRef } from "react";

import styles from "./Textarea.module.css";

function Textarea({ id, label, error, ...rest }, ref) {
  return (
    <div className={styles.textareaContainer}>
      <div className={styles.textareaWrapper}>
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
        <textarea
          id={id}
          ref={ref}
          className={clsx(styles.textarea, error && styles.error)}
          {...rest}
        />
      </div>
      {error && <p className={styles.errorMessage}>{error.message}</p>}
    </div>
  );
}
export default forwardRef(Textarea);
