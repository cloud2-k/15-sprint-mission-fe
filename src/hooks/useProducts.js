import { useState, useEffect } from "react";
import { getProducts } from "../api/product";

const useProducts = (initialParams = {}) => {
  const [products, setProducts] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchProducts = async (params = {}) => {
    try {
      setIsLoading(true);
      setError("");
      const data = await getProducts(params);
      setProducts(data?.list);
      setTotalCount(data?.totalCount);
    } catch (err) {
      if (err.response) {
        // 리퀘스트는 성공했지만 상태 코드가 실패(4XX, 5XX)를 나타냄
        setError(err.response.data.message);
        console.error(
          "❌ product 목록 조회 API 에러 발생: ",
          err.response.status,
          err.response.data,
        );
      } else {
        // 리퀘스트 자체가 실패
        setError("API 리퀘스트에 실패하였습니다.");
        console.error("❌ product 목록 조회 API 에러 발생: 리퀘스트 실패");
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchProducts(initialParams);
  }, []);

  return {
    products,
    totalCount,
    isLoading,
    error,
    refetch: (newParam) => fetchProducts(newParam),
  };
};

export default useProducts;
