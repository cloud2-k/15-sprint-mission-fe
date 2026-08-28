import clsx from "clsx";
import { Link, NavLink } from "react-router-dom";

import useDeviceType from "../../hooks/useDeviceType";

import { ROUTES } from "../../constants/routes";
import Button from "../ui/Button";

import logoMo from "../../assets/img_logo_mo.svg";
import logoPc from "../../assets/img_logo_pc.svg";

import styles from "./Header.module.css";

function Header() {
  const { isMobile } = useDeviceType();
  const logoImg = isMobile ? logoMo : logoPc;

  return (
    <header className={styles.headerWrapper}>
      <div className={styles.headerContent}>
        <div className={styles.gnbNav}>
          <Link to={ROUTES.HOME} className={styles.logoWrapper}>
            <img
              alt="판다마켓 로고 이미지"
              src={logoImg}
              className={styles.logoImage}
            />
          </Link>
          <nav className={styles.navLinks}>
            <NavLink
              to={ROUTES.FREEBOARD}
              className={({ isActive }) =>
                clsx(
                  isMobile ? "text-lg-bold" : "text-2lg-bold",
                  styles.navLink,
                  isActive && styles.active,
                )
              }
            >
              자유게시판
            </NavLink>
            <NavLink
              to={ROUTES.ITEMS}
              className={({ isActive }) =>
                clsx(
                  isMobile ? "text-lg-bold" : "text-2lg-bold",
                  styles.navLink,
                  isActive && styles.active,
                )
              }
            >
              중고마켓
            </NavLink>
          </nav>
        </div>
        <div>
          <Button size="sm40" to={ROUTES.LOGIN}>
            로그인
          </Button>
        </div>
      </div>
    </header>
  );
}
export default Header;
