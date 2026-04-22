import { categories } from "../data/categories";
import Category from "../ui/Category";

function Categories() {
  return (
    // <div>
    <div className="flex flex-col lg:flex-row justify-start items-center gap-5 overflow-auto mt-8">
      {categories.map((category) => (
        <Category category={category} key={category.title} />
      ))}
    </div>
  );
}

export default Categories;
