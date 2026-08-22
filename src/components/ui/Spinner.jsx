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
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        color="grey"
        height="32"
        strokeWidth="5"
        visible={true}
        width="32"
        wrapperClass=""
        wrapperStyle={{}}
      />
    </div>
  );
}
export default Spinner;
