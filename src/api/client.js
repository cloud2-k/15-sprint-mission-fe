/**
 * @file 전역 Axios 인스턴스 설정 파일
 * @description API 서버와의 통신을 위한 기본 설정(baseURL, timeout 등)이 적용된 인스턴스를 생성하고 관리합니다.
 * @author 김수지
 * @version 1.0.0
 */

import axios from "axios";

export const apiClient = axios.create({
  baseURL: "https://panda-market-api.vercel.app",
  timeout: 10000,
});
