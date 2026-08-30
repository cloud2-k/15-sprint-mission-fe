import { useRouteError } from "react-router-dom";

function GlobalErrorFallback() {
  const error = useRouteError();

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        minHeight: "50vh",
      }}
    >
      <p>{error?.message || "예상치 못한 에러가 발생했습니다."}</p>
    </div>
  );
}

export default GlobalErrorFallback;
