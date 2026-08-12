import clsx from "clsx";

import { useState } from "react";
import useIsMobile from "../../hooks/useIsMobile";
import mobileIcon from "../../assets/ic_sort.svg";
import pcIcon from "../../assets/ic_arrow_down.svg";
import styles from "./Dropdown.module.css";

function Dropdown({
  options = [
    { value: "recent", label: "최신순" },
    { value: "heart", label: "좋아요순" },
  ],
  selectedValue = { value: "recent", label: "최신순" },
  onSelect,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const isMobile = useIsMobile();

  const handleItemClick = (opt) => {
    onSelect(opt);
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdownWrapper}>
      <button onClick={() => setIsOpen(!isOpen)}>
        <div className={styles.dropdownButton}>
          {isMobile || <span>{selectedValue.label}</span>}
          <img src={isMobile ? mobileIcon : pcIcon} />
        </div>
      </button>
      {isOpen && (
        <ul className={styles.dropdownList}>
          {options.map((opt) => (
            <li
              key={opt.value}
              className={clsx("text-lg-regular", styles.dropdownItem)}
              onClick={() => {
                handleItemClick(opt);
              }}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default Dropdown;
