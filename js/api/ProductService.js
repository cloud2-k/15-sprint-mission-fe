// @ts-check

/**
 * @file Product API 관련 함수 모듈
 * @module api/ProductService
 * @author 김수지
 * @version 1.0.1
 */

import { instance } from "./client.js";

/**
 * product 목록을 서버에서 조회합니다.
 * @param {Object} [params={}] - 목록 조회를 위한 쿼리 파라미터
 * @param {number} [params.page] - 페이지 번호
 * @param {number} [params.pageSize] - 한 페이지당 항목 수
 * @param {string} [params.keyword] - 검색어
 * @returns {Promise<any>} product 목록 데이터 (Axios 응답)
 */
async function getProductList(params = {}) {
  const res = await instance.get(`/products`, { params });
  return res.data;
}

/**
 * id로 product를 조회합니다.
 * @param {number} id - product Id
 * @returns {Promise<any>} product 데이터 (Axios 응답)
 */
async function getProduct(id) {
  const res = await instance.get(`/products/${id}`);
  return res.data;
}

/**
 * productData로 product를 생성합니다.
 * @param {Object} productData - product 정보 객체
 * @param {string} productData.name - 상품 이름
 * @param {string} productData.description - 상품 설명
 * @param {number} productData.price - 상품 가격
 * @param {string} productData.tags - 상품 태그
 * @param {string[]} productData.images - 상품 이미지 링크 배열
 * @returns {Promise<any>} product 데이터 (Axios 응답)
 */
async function createProduct(productData) {
  const res = await instance.post(`/products`, productData);
  return res.data;
}

/**
 * productData로 product를 수정합니다.
 * @param {number} id - product Id
 * @param {Object} productData - product 정보 객체
 * @param {string} productData.name - 상품 이름
 * @param {string} productData.description - 상품 설명
 * @param {number} productData.price - 상품 가격
 * @param {string} productData.tags - 상품 태그
 * @param {string[]} productData.images - 상품 이미지 링크 배열
 * @returns {Promise<any>} product 데이터 (Axios 응답)
 */
async function patchProduct(id, productData) {
  const res = await instance.patch(`/products/${id}`, productData);
  return res.data;
}

/**
 * id로 product를 삭제합니다.
 * @param {number} id - product Id
 * @returns {Promise<any>} product 데이터 (Axios 응답)
 */
async function deleteProduct(id) {
  const res = await instance.delete(`/products/${id}`);
  return res.data;
}

export default {
  getProductList,
  getProduct,
  createProduct,
  patchProduct,
  deleteProduct,
};
