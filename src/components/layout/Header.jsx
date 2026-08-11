import clsx from "clsx";
import useIsMobile from "../../hooks/useIsMobile";
import Button from "../ui/Button";
import logoPc from "../../assets/logo-pc.svg";
import logoMo from "../../assets/logo-mo.svg";
import styles from "./Header.module.css";

function Header() {
  const isMobile = useIsMobile();
  const logoImg = isMobile ? logoMo : logoPc;

  return (
    <header className={styles.headerWrapper}>
      <div className={styles.headerContent}>
        <div className={styles.gnbNav}>
          <a href="/" className={styles.logoWrapper}>
            <img
              src={logoImg}
              alt="판다마켓 로고 이미지"
              className={styles.logoImage}
            />
          </a>
          <nav className={styles.navLinks}>
            <a
              href="/"
              className={clsx(
                styles.navLink,
                isMobile ? "text-lg-bold" : "text-2lg-bold",
              )}
            >
              자유게시판
            </a>
            <a
              href="/"
              className={clsx(
                styles.navLink,
                isMobile ? "text-lg-bold" : "text-2lg-bold",
              )}
            >
              중고마켓
            </a>
          </nav>
        </div>
        <div>
          <Button href="/login" size="sm40">
            로그인
          </Button>
        </div>
      </div>
    </header>
  );
}
export default Header;
