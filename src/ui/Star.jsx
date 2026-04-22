import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";

function Star({ rating }) {
  return (
    <div>
      {rating === 1 && (
        <div className="flex">
          <FaStar />
          <CiStar />
          <CiStar />
        </div>
      )}
      {rating === 2 && (
        <div className="flex text-indigo-400">
          <FaStar />
          <FaStar />
          <CiStar />
        </div>
      )}
      {rating === 3 && (
        <div className="flex">
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
      )}
    </div>
  );
}

export default Star;
