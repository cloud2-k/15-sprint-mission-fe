/**
 * @file 메인 페이지 진입점 (Entry Point) 스크립트
 * @author 김수지
 * @version 1.1.1
 */

import articleService from "./api/ArticleService.js";
import productService from "./api/ProductService.js";

/**
 * article API의 전체 CRUD 시나리오를 콘솔에 테스트합니다.
 *
 * @returns {Promise<void>} 반환값 없음
 */
async function testArticleApi() {
  console.group("article API 전체 시나리오 테스트");
  try {
    console.log("1. [get] article 목록 조회");
    const res1 = await articleService.getArticleList();
    console.log("✅ article 목록 조회 성공: ", res1);

    console.log("2. [post] article 생성");
    const articleData = {
      title: "테스트 글 제목: 강아지",
      content: "테스트 글 내용: 강아지",
      image:
        "https://www.gklibrarykor.com/wp-content/uploads/2024/08/1_%EA%B0%95%EC%95%84%EC%A7%80%EC%9D%98-%EC%8B%A0%EC%B2%B4%EC%A0%81-%ED%8A%B9%EC%A7%95.jpg",
    };
    const res2 = await articleService.createArticle(articleData);
    console.log("✅ article 생성 성공: ", res2);

    // 조회, 수정, 삭제용 ID
    const articleId = res2.id;

    console.log(`3. [get] ID: ${articleId} article 조회`);
    const res3 = await articleService.getArticle(articleId);
    console.log("✅ article 조회 성공: ", res3);

    console.log(`4. [patch] ID: ${articleId} article 수정`);
    const patchData = {
      title: "테스트 글 제목: 강아지(수정)",
      content: "테스트 글 내용: (수정)",
      image:
        "https://img.khan.co.kr/news/2024/03/23/news-p.v1.20240323.c159a4cab6f64473adf462d873e01e43_P1.jpg",
    };
    const res4 = await articleService.patchArticle(articleId, patchData);
    console.log("✅ article 수정 성공: ", res4);

    console.log(`5. [delete] ID: ${articleId} article 삭제`);
    const res5 = await articleService.deleteArticle(articleId);
    console.log("✅ article 삭제 성공: ", res5);

    console.log("6. [get] article 목록 조회(파라미터)");
    const res6 = await articleService.getArticleList({
      page: 1,
      pageSize: 20,
      keyword: "",
    });
    console.log("✅ article 목록 조회(파라미터) 성공: ", res6);
  } catch (e) {
    if (e.response) {
      // 리퀘스트는 성공했지만 상태 코드가 실패(4XX, 5XX)를 나타냄
      console.error(
        "❌ article API 테스트 중 에러 발생: ",
        e.response.status,
        e.response.data,
      );
    } else {
      // 리퀘스트 자체가 실패
      console.error("❌ article API 테스트 중 에러 발생: 리퀘스트 실패");
    }
  } finally {
    console.groupEnd();
  }
}

/**
 * product API의 전체 CRUD 시나리오를 콘솔에 테스트합니다.
 *
 * @returns {Promise<void>} 반환값 없음
 */
async function testProductApi() {
  console.group("product API 전체 시나리오 테스트");
  try {
    console.log("1. [get] product 목록 조회");
    const res1 = await productService.getProductList();
    console.log("✅ product 목록 조회 성공: ", res1);

    console.log("2. [post] product 생성");
    const productData = {
      name: "프런트엔드 레벨을 높이는 자바스크립트 퀴즈북",
      description: "기술 면접부터 실무 역량까지 순수 자바스크립트로 한 번에!",
      price: 32400,
      tags: "JavaScript",
      images: [
        "https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791169214407.jpg?t=2975839",
        "https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/addt/9791169214407_01.jpg?t=2975839",
      ],
    };
    const res2 = await productService.createProduct(productData);
    console.log("✅ product 생성 성공: ", res2);

    // 조회, 수정, 삭제용 ID
    const productId = res2.id;

    console.log(`3. [get] ID: ${productId} product 조회`);
    const res3 = await productService.getProduct(productId);
    console.log("✅ product 조회 성공: ", res3);

    console.log(`4. [patch] ID: ${productId} product 수정`);
    const patchData = {
      name: "코어 프런트엔드 UI",
      description: "리액트와 순수 자바스크립트로 키우는 실무 사고력",
      price: 34200,
      tags: "웹프로그래밍일반",
      images: [
        "https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791158396602.jpg?t=2975839",
      ],
    };
    const res4 = await productService.patchProduct(productId, patchData);
    console.log("✅ product 수정 성공: ", res4);

    console.log(`5. [delete] ID: ${productId} product 삭제`);
    const res5 = await productService.deleteProduct(productId);
    console.log("✅ product 삭제 성공: ", res5);

    console.log("6. [get] product 목록 조회(파라미터)");
    const res6 = await productService.getProductList({
      page: 1,
      pageSize: 20,
      keyword: "",
    });
    console.log("✅ product 목록 조회(파라미터) 성공: ", res6);
  } catch (e) {
    console.error("❌ product API 테스트 중 에러 발생: ", e.message || e);
  } finally {
    console.groupEnd();
  }
}

/**
 * API 테스트를 순차적으로 실행하는 초기화 함수입니다.
 *
 * @returns {Promise<void>} 반환값 없음
 */
async function init() {
  console.log("API 테스트 시작 🏃‍♀️‍➡️🏃‍♀️‍➡️🏃‍♀️‍➡️");
  await testArticleApi();
  await testProductApi();
  console.log("API 테스트 종료 🏃‍♀️🏃‍♀️🏃‍♀️");
}

init();
