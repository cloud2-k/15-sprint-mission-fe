import FeatureCard from "./FeatureCard";

import imgFeature1 from "../../assets/img_home_01.png";
import imgFeature2 from "../../assets/img_home_02.png";
import imgFeature3 from "../../assets/img_home_03.png";

import styles from "./FeatureSection.module.css";

const FEATURE_DATA = [
  {
    id: 1,
    reverse: false,
    tag: "Hot Item",
    title: (
      <>
        인기 상품을 <br className={styles.pcOnly} />
        확인해 보세요
      </>
    ),
    description: (
      <>
        가장 HOT한 중고거래 물품을 <br />
        판다 마켓에서 확인해 보세요
      </>
    ),
    imageUrl: imgFeature1,
    imageAlt: "인기 상품을 구경하는 이미지",
  },
  {
    id: 2,
    reverse: true,
    tag: "Search",
    title: (
      <>
        구매를 원하는 <br className={styles.pcOnly} />
        상품을 검색하세요
      </>
    ),
    description: (
      <>
        구매하고 싶은 물품은 검색해서 <br />
        쉽게 찾아보세요
      </>
    ),
    imageUrl: imgFeature2,
    imageAlt: "돋보기를 사용하여 상품을 자세히 보는 이미지",
  },
  {
    id: 3,
    reverse: false,
    tag: "Register",
    title: (
      <>
        판매를 원하는 <br className={styles.pcOnly} />
        상품을 등록하세요
      </>
    ),
    description: (
      <>
        어떤 물건이든 판매하고 싶은 상품을 <br />
        쉽게 등록하세요
      </>
    ),
    imageUrl: imgFeature3,
    imageAlt: "판매 상품 등록 안내 이미지",
  },
];
function FeatureSection() {
  return (
    <section className={styles.featureContainer}>
      <ul className={styles.featureList}>
        {FEATURE_DATA.map((item) => (
          <FeatureCard key={item.id} {...item} />
        ))}
      </ul>
    </section>
  );
}
export default FeatureSection;
