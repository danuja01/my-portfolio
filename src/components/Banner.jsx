import { TiWarningOutline } from "react-icons/ti";

const Banner = ({ message }) => {
  return (
    <div className="banner">
      <div className="">
        <TiWarningOutline className="text-md mr-2" />
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Banner;
