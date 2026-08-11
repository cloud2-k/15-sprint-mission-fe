import useIsMobile from "../../hooks/useIsMobile";
import facebookIcon from "../../assets/ic_facebook.svg";
import twitterIcon from "../../assets/ic_twitter.svg";
import youtubeIcon from "../../assets/ic_youtube.svg";
import instagramIcon from "../../assets/ic_instagram.svg";
import styles from "./Footer.module.css";

function Footer() {
  const isMobile = useIsMobile();

  const pageLinksBlock = (
    <div className={styles.pageLinks}>
      <a href="/privacy">Privacy Policy</a>
      <a href="/faq">FAQ</a>
    </div>
  );
  const socialLinksBlock = (
    <div className={styles.socialLinks}>
      <a href="https://www.facebook.com/" target="_blank">
        <img src={facebookIcon} alt="페이스북 아이콘" />
      </a>
      <a href="https://x.com/" target="_blank">
        <img src={twitterIcon} alt="트위터 아이콘" />
      </a>
      <a href="https://www.youtube.com/" target="_blank">
        <img src={youtubeIcon} alt="유튜브 아이콘" />
      </a>
      <a href="https://www.instagram.com/" target="_blank">
        <img src={instagramIcon} alt="인스타그램 아이콘" />
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
