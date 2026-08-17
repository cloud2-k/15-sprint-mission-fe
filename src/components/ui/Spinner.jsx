import { RotatingLines } from "react-loader-spinner";

function Spinner({ minHeight = "200px" }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        minHeight: minHeight,
      }}
    >
      <RotatingLines
        visible={true}
        height="32"
        width="32"
        color="grey"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}
export default Spinner;
