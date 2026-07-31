// @ts-check

/**
 * @file Article API 관련 함수 모듈
 * @module api/articleApi
 * @author 김수지
 * @version 1.0.1
 */

import { instance } from "./client.js";

/**
 * article 목록을 서버에서 조회합니다.
 * @param {Object} [params={}] - 목록 조회를 위한 쿼리 파라미터
 * @param {number} [params.page] - 페이지 번호
 * @param {number} [params.pageSize] - 한 페이지당 항목 수
 * @param {string} [params.keyword] - 검색어
 * @returns {Promise<any>} article 목록 데이터 (Axios 응답)
 */
async function getArticleList(params = {}) {
  const res = await instance.get(`/articles`, { params });
  return res.data;
}

/**
 * id로 article을 조회합니다.
 * @param {number} id
 * @returns {Promise<any>} article 데이터 (Axios 응답)
 */
async function getArticle(id) {
  const res = await instance.get(`/articles/${id}`);
  return res.data;
}

/**
 * articleData로 article을 생성합니다.
 * @param {Object} articleData - article 정보 객체
 * @param {string} articleData.title - article 제목
 * @param {string} articleData.content - article 내용
 * @param {string} articleData.image - article 이미지 주소
 * @returns {Promise<any>} article 데이터 (Axios 응답)
 */
async function createArticle(articleData) {
  const res = await instance.post(`/articles`, articleData);
  return res.data;
}

/**
 * articleData로 article을 수정합니다.
 * @param {number} id - article ID
 * @param {Object} articleData - article 정보 객체
 * @param {string} articleData.title - article 제목
 * @param {string} articleData.content - article 내용
 * @param {string} articleData.image - article 이미지 주소
 * @returns {Promise<any>} article 데이터 (Axios 응답)
 */
async function patchArticle(id, articleData) {
  const res = await instance.patch(`/articles/${id}`, articleData);
  return res.data;
}

/**
 * id로 article을 삭제합니다.
 * @param {number} id - article ID
 * @returns {Promise<any>} article 데이터 (Axios 응답)
 */
async function deleteArticle(id) {
  const res = await instance.delete(`/articles/${id}`);
  return res.data;
}

export default {
  getArticleList,
  getArticle,
  createArticle,
  patchArticle,
  deleteArticle,
};
