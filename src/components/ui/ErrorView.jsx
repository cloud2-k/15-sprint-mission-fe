function ErrorView({
  minHeight = "200px",
  message = "데이터를 불러오는 중 문제가 발생했습니다.",
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        minHeight: minHeight,
      }}
    >
      <p>{message}</p>
    </div>
  );
}

export default ErrorView;
