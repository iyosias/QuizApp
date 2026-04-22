import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import Star from "./Star";

function Category({ category }) {
  return (
    <div>
      <div className=" relative pb-percentage-5-6">
        <img
          className="absolute h-full w-full object-cover rounded-lg shadow-md"
          src={category.imageUrl}
          alt={category.imageAlt}
        />
      </div>

      <div className="relative px-4 -mt-16">
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <div className="flex items-baseline">
            <span className="bg-indigo-200 text-indigo-800 text-xs px-2 inline-block rounded-full uppercase font-semibold tracking-wide">
              New
            </span>
            <div className="ml-2 text-gray-600 text-sm uppercase font-semibold tracking-wide">
              <div className="flex flex-row items-center gap-2">
                Difficulty &bull; {category.difficulty}
                {category.difficulty === "easy" && <Star rating={1} />}
                {category.difficulty === "intermediate" && <Star rating={2} />}
                {category.difficulty === "hard" && <Star rating={3} />}
              </div>
            </div>
          </div>
          <h4 className="mt-1 font-semibold text-2xl">{category.title}</h4>
          <p className="mt-2 text-pretty font-medium text-indigo-900 leading-tight">
            {category.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Category;
