// @ts-check

import { apiClient } from "./client.js";

/**
 * @typedef {Object} Product
 * @property {number} id - 상품 고유 ID
 * @property {string} name - 상품 이름
 * @property {number} price - 상품 가격
 * @property {string} createdAt - 상품 등록일시 (ISO 8601 형식)
 */

/**
 * @typedef {Object} ProductListResponse
 * @property {boolean} success - API 요청 성공 여부
 * @property {string} message - 응답 결과 메시지
 * @property {Object} data - 실제 응답 데이터 객체
 * @property {Product[]} data.items - 상품 데이터 목록 배열
 * @property {Object} data.pagination - 페이지네이션 정보 객체
 * @property {number} data.pagination.currentPage - 현재 페이지 번호
 * @property {number} data.pagination.totalPages - 전체 페이지 수
 * @property {number} data.pagination.totalCount - 전체 상품 개수
 */

/**
 * product 목록을 서버에서 조회합니다.
 * @param {Object} [params={}] - 목록 조회를 위한 쿼리 파라미터
 * @param {number} [params.page=1] - 페이지 번호
 * @param {number} [params.limit=10] - 한 페이지당 상품 수
 * @param {string} [params.keyword] - 검색 키워드
 * @returns {Promise<ProductListResponse>} product 목록 데이터 응답 객체
 */
export async function getProducts(params = {}) {
  const res = await apiClient.get(`/products`, { params });
  return res.data;
}
