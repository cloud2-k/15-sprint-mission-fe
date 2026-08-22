import clsx from "clsx";

import styles from "./Button.module.css";

function Button({
  href,
  size = "md",
  color = "primary",
  isDisabled = false,
  onClick,
  children,
  ...rest
}) {
  const buttonClass = clsx(
    styles.btnBase,
    {
      [styles.btnLg]: size === "lg",
      [styles.btnMd]: size === "md",
      [styles.btnSm40]: size === "sm40",
      [styles.btnSm48]: size === "sm48",
    },
    {
      [styles.btnPrimary]: color === "primary",
      [styles.btnOutline]: color === "outline",
    },
    {
      [styles.btnDisabled]: isDisabled,
    },
  );

  // href 값이 전달되면 <a> 태그로 렌더링
  if (href) {
    return (
      <a href={href} className={buttonClass} {...rest}>
        {children}
      </a>
    );
  }

  // href 값이 없다면 <button> 태그로 렌더링
  return (
    <button
      disabled={isDisabled}
      className={buttonClass}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
