# 🐼 판다마켓 프로젝트

> 이 저장소는 판다마켓 프로젝트의 프론트엔드 미션을 수행하는 저장소입니다. 🔗 [판다마켓 바로가기🐼](https://symphonious-kashata-0f23b5.netlify.app/)

## 스프린트 미션1

### 기본 요구사항

#### 랜딩 페이지

- [x] React와 같은 UI 라이브러리를 사용하지 않고 진행합니다

- [x] PC사이즈만 고려해 주어진 디자인으로 구현합니다.

- [x] HTML, CSS 파일을 Netlify로 배포해 주세요. (참고: https://www.codeit.kr/learn/5309)

- [x] 랜딩 페이지의 url path는 루트(‘/’)로 설정합니다.

- [x] title은 “판다마켓”로 설정합니다.

- [x] “판다마켓” 로고 클릭 시 루트 페이지(‘/’)로 이동합니다.

- [x] '로그인' 버튼 클릭 시 로그인 페이지(‘/login’)로 이동합니다 (빈 페이지)

- [x] “구경하러 가기”버튼 클릭 시(’/items’)로 이동합니다. (빈 페이지)

- [x] “Privacy Policy”, “FAQ”는 클릭 시 각각 Privacy 페이지(‘/privacy’), FAQ 페이지(‘/faq’)로 이동합니다.(모두 빈 페이지)

- [x] 페이스북, 트위터, 유튜브, 인스타그램 아이콘을 클릭 시 각각의 홈페이지로 새로운 창이 열리면서 이동합니다.

- [x] 아래로 스크롤해도 “판다 마켓” 로고와 “로그인” 버튼이 있는 상단 내비게이션 바(Global Navigation Bar)가 최상단에 고정되게 해 주세요.

- [x] 화면의 너비가 1920px 이상이면 하늘색 배경색은 너비를 꽉 채우도록 채워지고, 내부 요소들의 위치는 고정되고, 여백만 커지도록 합니다.

- [x] 화면의 너비가 1920px 보다 작아질 때, “판다마켓” 로고의 왼쪽 여백 200px, “로그인" 버튼의 오른쪽 여백 200px이 유지되고, 화면의 너비가 작아질수록 두 요소 간 거리가 가까워지도록 설정합니다.

- [x] 화면의 너비가 1920px 이상이면 내부에 있는 요소 간 동일한 간격을 유지하며 가운데 정렬해야 합니다.

- [x] 화면의 너비가 1920px 보다 작아질 때, 최하단에 있는 “codeit-2024”의 왼쪽 여백 200px과 SNS 아이콘들의 오른쪽 여백 200px을 유지하면서 가운데 있는 “Privacy Policy”, “FAQ” 요소와 각각 동일한 간격을 유지하며 가까워져야 합니다.

- [x] 클릭으로 기능이 동작해야 하는 경우, 사용자가 클릭할 수 있는 요소임을 알 수 있도록 CSS 속성 cursor: pointer로 설정합니다.

### 심화 요구사항

#### 공통

- [x] reset.css를 설정해 주세요.
- [ ] 사용자의 브라우저 설정에 따라 기본 폰트 크기 설정이 변화함에 따라서 페이지의 요소 간 간격, 요소의 크기, font-size 등 모든 크기와 관련된 값이 크고 작아지도록 설정해 주세요.

## 스프린트 미션2

### 기본 요구사항

#### 로그인 페이지, 회원가입 페이지 공통

- [x] "판다마켓" 로고 클릭 시 루트 페이지("/")로 이동합니다.
- [x] SNS 아이콘들은 클릭 시 각각 "https://www.google.com/", "https://www.kakaocorp.com/page/" 으로 이동합니다.
- [x] input 요소에 focus in 일 때, 테두리 색상은 ##3692FF입니다.
- [x] input 요소에 focus out 일 때, 테두리는 없습니다.

#### 로그인 페이지

- [x] "회원가입"버튼 클릭 시 "/signup" 페이지로 이동합니다.

#### 회원가입 페이지

- [x] "로그인"버튼 클릭 시 "/login" 페이지로 이동합니다

### 심화 요구사항

#### 공통

- [x] palette에 있는 color값들을 css 변수로 등록해서 사용합니다.
- [x] 구글 애널리틱스로 방문자 수 확인하기 할 수 있도록 설정합니다.

#### 로그인 페이지, 회원가입 페이지 공통

- [x] 비밀번호, 비밀번호 확인 input 요소 오른쪽에 비밀번호를 확인할 수 있는 눈 모양 아이콘을 추가합니다.

## 스프린트 미션3

### 기본 요구사항

- [x] Github에 스프린트 미션 PR을 만들어 주세요.
- [x] 'https://panda-market-api-crud.vercel.app/docs/#/Article' API를 이용하여 아래 함수들을 구현해 주세요.
  - [x] getArticleList() : GET 메서드를 사용해 주세요.
    - [x] page, pageSize, keyword 쿼리 파라미터를 이용해 주세요.
  - [x] getArticle() : GET 메서드를 사용해 주세요.
  - [x] createArticle() : POST 메서드를 사용해 주세요.
    - [x] request body에 title, content, image 를 포함해 주세요.
  - [x] patchArticle() : PATCH 메서드를 사용해 주세요.
  - [x] deleteArticle() : DELETE 메서드를 사용해 주세요.
- [x] fetch 혹은 axios 를 이용해 주세요.
  - [x] 응답의 상태 코드가 2XX가 아닐 경우, 에러메시지를 콘솔에 출력해 주세요.
- [ ] .then() 메서드를 이용하여 비동기 처리를 해주세요. → try catch 문 사용으로 통일
- [ ] .catch() 를 이용하여 오류 처리를 해주세요. → try catch 문 사용으로 통일
- [x] 'https://panda-market-api-crud.vercel.app/docs/#/Product' API를 이용하여 아래 함수들을 구현해 주세요.
  - [x] getProductList() : GET 메서드를 사용해 주세요.
    - [x] page, pageSize, keyword 쿼리 파라미터를 이용해 주세요.
  - [x] getProduct() : GET 메서드를 사용해 주세요.
  - [x] createProduct() : POST 메서드를 사용해 주세요.
    - [x] request body에 name, description, price, tags, images 를 포함해 주세요.
  - [x] patchProduct() : PATCH 메서드를 사용해 주세요.
  - [x] deleteProduct() : DELETE 메서드를 사용해 주세요.
- [x] async/await 을 이용하여 비동기 처리를 해주세요.
- [x] try/catch 를 이용하여 오류 처리를 해주세요.
- [x] 구현한 함수들을 아래와 같이 파일을 분리해 주세요.
  - [x] export를 활용해 주세요.
  - [x] ProductService.js 파일 Product API 관련 함수들을 작성해 주세요.
  - [x] ArticleService.js 파일에 Article API 관련 함수들을 작성해 주세요.
- [x] 이외의 코드들은 모두 main.js 파일에 작성해 주세요.
  - [x] import를 활용해 주세요.
  - [x] 각 함수를 실행하는 코드를 작성하고, 제대로 동작하는지 확인해 주세요.

### 학습 내용 및 트러블슈팅

#### 1. Fetch 대신 Axios 사용 및 CDN 모듈 환경 구성
- 수업과 실습에서는 주로 브라우저 내장 API인 `fetch`를 사용해왔기 때문에 공부를 위해 `Axios`를 도입하여 API를 구현했습니다.
- **환경 구성:** 순수 Vanilla 자바스크립트 환경에서는 브라우저에서 npm 모듈을 읽을 수 없어, CDN 방식을 사용해야 한다는 사실을 배웠습니다. 따라서 `import axios from "axios";` 방식을 주석 처리하고, `import axios from "https://cdn.jsdelivr.net/npm/axios/+esm";` 구문을 사용하여 ES Modules 형태로 안전하게 로드했습니다.

#### 2. 브라우저 테스트 환경 구성 및 요구사항 엄수
- **테스트:** API 동작 검증을 위해 `main.js` 파일을 작성하고, 테스트 과정에서는 `index.html`에 `<script type="module" src="./js/main.js"></script>` 코드를 임시로 삽입하여 브라우저 콘솔에서 결과를 확인했습니다.
- 요구사항에 HTML 수정을 요구하는 내용이 없었으므로, 테스트 완료 후 해당 스크립트 연결 코드는 Git 커밋 내역에 포함되지 않도록 하였습니다.

#### 3. 네트워크 지연에 따른 Timeout 에러 해결
- **문제:** API 통신 중 간헐적으로 타임아웃(Timeout) 에러가 발생하여 테스트가 중단되는 현상이 있었습니다.
- **원인 및 해결:** 데이터 쓰기(POST) 작업의 물리적 지연이 원인임을 파악했습니다. 이에 `client.js`의 전역 Axios 설정에서 `timeout` 값을 기존 `3000ms`에서 `10000ms`로 조정하여 문제를 해결했습니다.

#### 4. 400 Bad Request 디버깅 및 JSDoc 타입 구체화
- **문제:** 데이터를 생성(POST)하는 과정에서 400 Bad Request (`Not match in '^https?://.+'`) 에러가 발생했습니다.
- **원인 및 해결:** 이미지 링크 입력란에 실제 HTTP 형식이 아닌 한글 더미 문자열(`"주소링크"`)을 입력했던 것이 원인이었습니다. 백엔드에서 반환한 에러 로그를 확인하여 원인을 파악하고, 이를 `https://~` 형식의 URL로 수정하여 해결했습니다.
- **추가 개선:** 문제를 해결하는 과정에서 반환 타입이 모호했던 `Promise<any>`를 `Promise<Object>`로 구체화하여 JSDoc 문서의 완성도와 에디터 자동완성 효율을 높였습니다.