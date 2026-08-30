import clsx from "clsx";

import useDeviceType from "../../hooks/useDeviceType";

import { ROUTES } from "../../constants/routes";
import Button from "../ui/Button";

import imgHomeBottom from "../../assets/img_home_bottom.png";
import imgHomeTop from "../../assets/img_home_top.png";

import styles from "./HeroBanner.module.css";

const BANNER_DATA = {
  top: {
    titleTag: "h1",
    title: (
      <>
        일상의 모든 물건을 <br className={styles.tabletHidden} /> 거래해 보세요
      </>
    ),
    imageUrl: imgHomeTop,
    imageAlt: "쇼핑백을 들고 인사하고 있는 판다 캐릭터 이미지",
    hasButton: true,
  },
  bottom: {
    titleTag: "h2",
    title: (
      <>
        믿을 수 있는 <br /> 판다마켓 중고 거래
      </>
    ),
    imageUrl: imgHomeBottom,
    imageAlt: "쇼핑백을 들고 서로 인사하고 있는 판다 캐릭터 2명 이미지",
    hasButton: false,
  },
};

function HeroBanner({ position }) {
  const data = BANNER_DATA[position];
  const TitleTag = data.titleTag;

  const { device } = useDeviceType();
  const buttonSize = device === "MOBILE" ? "md" : "lg";

  return (
    <section
      className={clsx(
        styles.bannerContainer,
        position === "bottom" && styles.bottomContainer,
      )}
    >
      <div className={styles.bannerContent}>
        <div className={styles.textContent}>
          <TitleTag className={styles.title}>{data.title}</TitleTag>
          {data.hasButton && (
            <Button size={buttonSize} to={ROUTES.ITEMS}>
              구경하러 가기
            </Button>
          )}
        </div>
        <div className={styles.imageContent}>
          <img
            alt={data.imageAlt}
            src={data.imageUrl}
            className={
              position === "top" ? styles.imageTop : styles.imageBottom
            }
          />
        </div>
      </div>
    </section>
  );
}
export default HeroBanner;
