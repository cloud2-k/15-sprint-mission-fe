import clsx from "clsx";
import { useState } from "react";

import useDeviceType from "../../hooks/useDeviceType";

import pcIcon from "../../assets/ic_arrow_down.svg";
import mobileIcon from "../../assets/ic_sort.svg";

import styles from "./Dropdown.module.css";

function Dropdown({ options, selectedValue, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);

  const { isMobile } = useDeviceType();

  const handleItemClick = (opt) => {
    onSelect(opt);
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdownWrapper}>
      <button onClick={() => setIsOpen(!isOpen)}>
        <div className={styles.dropdownButton}>
          {!isMobile && (
            <span className="text-lg-regular">{selectedValue.label}</span>
          )}
          <img alt="정렬" src={isMobile ? mobileIcon : pcIcon} />
        </div>
      </button>
      {isOpen && (
        <ul className={styles.dropdownList}>
          {options.map((opt) => (
            <li
              key={opt.value}
              className={clsx("text-lg-regular", styles.dropdownItem)}
              onClick={() => handleItemClick(opt)}
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
