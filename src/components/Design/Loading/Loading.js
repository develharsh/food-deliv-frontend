import "./Loading.css";
const Loading = ({ show }) => {
  return (
    <div className={show && "loadingDiv"}>
      {show && <div className="spinner-8 centerXY"></div>}
    </div>
  );
};

export default Loading;
