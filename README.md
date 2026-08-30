# 🐼 판다마켓 프로젝트

> 이 저장소는 판다마켓 프로젝트의 프론트엔드 리액트 미션을 수행하는 저장소입니다. 🔗 [판다마켓 바로가기🐼](https://cloud-panda-market.netlify.app/)

## 1. 기술 스택

- **Runtime:** Node.js
- **Package Manager:** Yarn (v1)
- **Library:** React
- **Routing:** React Router DOM
- **Form Management:** React Hook Form
- **Styling:** CSS Modules
- **Code Quality:** ESLint (eslint-plugin-perfectionist)

## 2. 프로젝트 구조

```
📦src
 ┣ 📂api
 ┃ ┣ 📜client.js
 ┃ ┗ 📜product.js
 ┣ 📂assets
 ┃ ┣ 📜ic_arrow_down.svg
 ┃ ┣ 📜ic_arrow_left.svg
 ┃ ┣ 📜ic_arrow_right.svg
 ┃ ┣ 📜ic_delete.svg
 ┃ ┣ 📜ic_facebook.svg
 ┃ ┣ 📜ic_heart.svg
 ┃ ┣ 📜ic_instagram.svg
 ┃ ┣ 📜ic_search.svg
 ┃ ┣ 📜ic_sort.svg
 ┃ ┣ 📜ic_twitter.svg
 ┃ ┣ 📜ic_youtube.svg
 ┃ ┣ 📜img_home_01.png
 ┃ ┣ 📜img_home_02.png
 ┃ ┣ 📜img_home_03.png
 ┃ ┣ 📜img_home_bottom.png
 ┃ ┣ 📜img_home_top.png
 ┃ ┣ 📜img_logo_mo.svg
 ┃ ┣ 📜img_logo_pc.svg
 ┃ ┗ 📜img_product_default.png
 ┣ 📂components
 ┃ ┣ 📂error
 ┃ ┃ ┣ 📜ErrorView.jsx
 ┃ ┃ ┗ 📜GlobalErrorFallback.jsx
 ┃ ┣ 📂landing
 ┃ ┃ ┣ 📜FeatureCard.jsx
 ┃ ┃ ┣ 📜FeatureCard.module.css
 ┃ ┃ ┣ 📜FeatureSection.jsx
 ┃ ┃ ┣ 📜FeatureSection.module.css
 ┃ ┃ ┣ 📜HeroBanner.jsx
 ┃ ┃ ┗ 📜HeroBanner.module.css
 ┃ ┣ 📂layout
 ┃ ┃ ┣ 📜Footer.jsx
 ┃ ┃ ┣ 📜Footer.module.css
 ┃ ┃ ┣ 📜Header.jsx
 ┃ ┃ ┣ 📜Header.module.css
 ┃ ┃ ┣ 📜LandingLayout.jsx
 ┃ ┃ ┣ 📜Layout.jsx
 ┃ ┃ ┣ 📜MainContent.jsx
 ┃ ┃ ┗ 📜MainContent.module.css
 ┃ ┣ 📂product
 ┃ ┃ ┣ 📜BestProductSection.jsx
 ┃ ┃ ┣ 📜BestProductSection.module.css
 ┃ ┃ ┣ 📜ProductCard.jsx
 ┃ ┃ ┣ 📜ProductCard.module.css
 ┃ ┃ ┣ 📜ProductForm.jsx
 ┃ ┃ ┣ 📜ProductForm.module.css
 ┃ ┃ ┣ 📜ProductTagList.jsx
 ┃ ┃ ┣ 📜ProductTagList.module.css
 ┃ ┃ ┣ 📜SaleProductList.jsx
 ┃ ┃ ┗ 📜SaleProductList.module.css
 ┃ ┗ 📂ui
 ┃ ┃ ┣ 📜Button.jsx
 ┃ ┃ ┣ 📜Button.module.css
 ┃ ┃ ┣ 📜Dropdown.jsx
 ┃ ┃ ┣ 📜Dropdown.module.css
 ┃ ┃ ┣ 📜Input.jsx
 ┃ ┃ ┣ 📜Input.module.css
 ┃ ┃ ┣ 📜Pagination.jsx
 ┃ ┃ ┣ 📜Pagination.module.css
 ┃ ┃ ┣ 📜SearchInput.jsx
 ┃ ┃ ┣ 📜SearchInput.module.css
 ┃ ┃ ┣ 📜Spinner.jsx
 ┃ ┃ ┣ 📜Textarea.jsx
 ┃ ┃ ┗ 📜Textarea.module.css
 ┣ 📂constants
 ┃ ┣ 📜breakpoints.js
 ┃ ┗ 📜routes.js
 ┣ 📂hooks
 ┃ ┣ 📜useDeviceType.js
 ┃ ┗ 📜useProducts.js
 ┣ 📂pages
 ┃ ┣ 📜LandingPage.jsx
 ┃ ┣ 📜ProductRegistrationPage.jsx
 ┃ ┗ 📜UsedProductsPage.jsx
 ┣ 📜App.jsx
 ┣ 📜index.css
 ┗ 📜main.jsx
```

## 3. 실행

```bash
# 의존성 설치
yarn

# 로컬 개발 서버 실행 (Nodemon)
yarn dev
```

## 4. 스프린트 미션 (sprint 5)

### 기본 요구사항

#### 공통

- [x] Github에 스프린트 미션 PR을 만들어 주세요.
- [x] React, Express를 사용해 진행합니다.

#### 랜딩 페이지

- [x] HTML과 CSS로 구현한 랜딩페이지를 React로 마이그레이션하세요.
- [x] 랜딩 페이지 url path는 "/"로 설정하세요.

#### 중고마켓 페이지

- [x] 중고마켓 페이지 url path를 "/items"으로 설정하세요.
- [x] 페이지 주소가 "/items" 일 때 상단내비게이션바의 "중고마켓" 버튼의 색상은 "3692FF"입니다.
- [x] 중고마켓 페이지 판매 중인 상품은 본인이 만든 GET 메서드를 사용해 주세요.
  - [x] 다만 좋아요 순 정렬 기능은 제외해 주세요.
  - [x] 사진은 디폴트 이미지로 프론트엔드에서 처리해주세요.
  - [x] 베스트 상품 목록 조회는 구현하지 않습니다.
- [x] '상품 등록하기' 버튼을 누르면 "/registration" 로 이동합니다.

#### 상품 등록 페이지

- [x] PC, Tablet, Mobile 디자인에 해당하는 상품 등록 페이지를 만들어 주세요.
- [x] 상품 등록 url path는 "/registration"입니다.
- [x] 상품 등록은 본인이 만든 POST 메서드를 사용해 주세요.
- [x] 등록 성공 시, 해당 상품 상세 페이지로 이동합니다. (빈페이지)

### 심화 요구사항

#### 상품 등록 페이지

- [x] 모든 입력 input box에 빈 값이 있을 경우, 등록 버튼이 비활성화됩니다.
- [x] 태그를 입력한 후 엔터키를 누르면, 그 태그가 칩 형태로 쌓입니다.
- [ ] 상품명, 상품 소개, 판매 가격, 태그에 대한 유효성 검사 Custom Hook을 만들어주세요. 유효성 검사를 통과하지 않을 경우, 각 input에 빨간색 테두리와, 각각의 Input 아래에 빨간색 에러 메시지를 보여주세요. -> Custom Hook은 만들지 않았지만, 기능은 구현하였습니다.
  - 유효한 조건
    - 상품명: 1자 이상, 10자 이내
    - 상품 소개: 10자 이상, 100자 이내
    - 판매 가격: 1자 이상, 숫자
    - 태그: 5글자 이내
