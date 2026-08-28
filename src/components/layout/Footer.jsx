import { Link } from "react-router-dom";

import useDeviceType from "../../hooks/useDeviceType";

import { ROUTES } from "../../constants/routes";

import facebookIcon from "../../assets/ic_facebook.svg";
import instagramIcon from "../../assets/ic_instagram.svg";
import twitterIcon from "../../assets/ic_twitter.svg";
import youtubeIcon from "../../assets/ic_youtube.svg";

import styles from "./Footer.module.css";

function Footer() {
  const { isMobile } = useDeviceType();

  const pageLinksBlock = (
    <div className={styles.pageLinks}>
      <Link to={ROUTES.PRIVACY}>Privacy Policy</Link>
      <Link to={ROUTES.FAQ}>FAQ</Link>
    </div>
  );
  const socialLinksBlock = (
    <div className={styles.socialLinks}>
      <a
        href="https://www.facebook.com/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img alt="페이스북 아이콘" src={facebookIcon} />
      </a>
      <a href="https://x.com/" rel="noopener noreferrer" target="_blank">
        <img alt="트위터 아이콘" src={twitterIcon} />
      </a>
      <a
        href="https://www.youtube.com/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img alt="유튜브 아이콘" src={youtubeIcon} />
      </a>
      <a
        href="https://www.instagram.com/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img alt="인스타그램 아이콘" src={instagramIcon} />
      </a>
    </div>
  );
  const copyRightBlock = (
    <div className={styles.copyRight}>&copy;codeit - 2024</div>
  );

  return (
    <footer className={styles.footerWrapper}>
      {isMobile ? (
        // 모바일: pageLinks와 socialLinks를 links div로 묶고, 카피라이트를 아래에 배치
        <div className={styles.footerContent}>
          <div className={styles.links}>
            {pageLinksBlock}
            {socialLinksBlock}
          </div>
          {copyRightBlock}
        </div>
      ) : (
        // PC: 묶음 없이 카피라이트 -> 페이지링크 -> 소셜링크 순서로 배치
        <div className={styles.footerContent}>
          {copyRightBlock}
          {pageLinksBlock}
          {socialLinksBlock}
        </div>
      )}
    </footer>
  );
}
export default Footer;
