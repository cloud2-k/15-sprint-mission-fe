// @ts-check

import { useState, useEffect } from "react";

import { getProducts } from "../api/product";

/**
 * @typedef {Object} UseProductsParams
 * @property {number} [page=1] - 페이지 번호
 * @property {number} [limit=10] - 한 페이지당 상품 수
 * @property {string} [keyword=""] - 검색 키워드
 */

/**
 * @typedef {Object} UseProductsReturn
 * @property {import("../api/product").Product[]} products - 조회된 상품 목록 데이터 배열
 * @property {number} totalCount - 전체 상품 개수
 * @property {boolean} isLoading - 데이터 로딩 상태
 * @property {string} error - 에러 발생 시 에러 메시지
 */

/**
 * 조건에 맞는 상품 목록을 서버에서 불러오고 상태를 관리하는 커스텀 훅입니다.
 * 의존성 배열(deps)에 있는 파라미터들이 변경될 때마다 API를 자동으로 재호출합니다.
 *
 * @param {UseProductsParams} [params={}] - API 요청에 필요한 쿼리 파라미터
 * @returns {UseProductsReturn} 컴포넌트에서 사용할 수 있는 상태값
 */
const useProducts = ({ page = 1, limit = 10, keyword = "" } = {}) => {
  const [products, setProducts] = useState(
    /** @type {import('../api/product').Product[]} */ ([]),
  );
  const [totalCount, setTotalCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let ignore = false;

    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        setError("");
        const res = await getProducts({ page, limit, keyword });
        if (!ignore) {
          setProducts(res?.data.items || []);
          setTotalCount(res?.data.pagination.totalCount || 0);
        }
      } catch (error) {
        if (ignore) return;

        const err = /** @type {import('axios').AxiosError<any>} */ (error);

        if (err.response) {
          const errorMessage =
            err.response?.data?.message ||
            err.message ||
            "상품 목록을 불러오지 못했습니다.";

          setError(errorMessage);

          console.error(
            "❌ product 목록 조회 API 에러 발생: ",
            err.response.status,
            err.response.data,
          );
        } else {
          setError("product API 리퀘스트에 실패하였습니다.");
          console.error("❌ product 목록 조회 API 에러 발생: 리퀘스트 실패");
        }
      } finally {
        if (!ignore) setIsLoading(false);
      }
    };

    fetchProducts();

    return () => {
      ignore = true;
    };
  }, [page, limit, keyword]);

  return {
    products,
    totalCount,
    isLoading,
    error,
  };
};

export default useProducts;
