import axios from "axios";

/**
 * API 서버와의 통신을 위한 기본 설정(baseURL, timeout 등)이 적용된 Axios 인스턴스입니다.
 */
export const apiClient = axios.create({
  baseURL: "https://cloud-panda-market-api.onrender.com/api",
  timeout: 120000,
});
