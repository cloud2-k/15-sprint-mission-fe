// @ts-check

/**
 * @file product API 관련 함수 모듈
 * @module api/product
 * @author 김수지
 * @version 1.0.0
 */

import { apiClient } from "./client.js";

/**
 * @typedef {Object} Product
 * @property {number} id - 상품 고유 ID
 * @property {string} name - 상품 이름
 * @property {string} description - 상품 설명
 * @property {number} price - 상품 가격
 * @property {string[]} tags - 상품 태그 목록
 * @property {string[]} images - 상품 이미지 URL 목록
 * @property {number} ownerId - 판매자 고유 ID
 * @property {string} ownerNickname - 판매자 닉네임
 * @property {number} favoriteCount - 관심(좋아요) 수
 * @property {string} createdAt - 상품 등록일시 (ISO 8601 형식)
 */

/**
 * @typedef {Object} ProductListResponse
 * @property {number} totalCount - 전체 상품 개수
 * @property {Product[]} list - 상품 데이터 목록 배열
 */

/**
 * product 목록을 서버에서 조회합니다.
 * @param {Object} [params={}] - 목록 조회를 위한 쿼리 파라미터
 * @param {number} [params.page=1] - 페이지 번호
 * @param {number} [params.pageSize=10] - 한 페이지당 상품 수
 * @param {string} [params.orderBy="recent"] - 정렬 기준(favorite, recent)
 * @param {string} [params.keyword] - 검색 키워드
 * @returns {Promise<ProductListResponse>} product 목록 데이터 응답 객체
 */
export async function getProducts(params = {}) {
  const res = await apiClient.get(`/products`, { params });
  return res.data;
}
