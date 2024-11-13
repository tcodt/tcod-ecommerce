import { BsShopWindow } from "react-icons/bs";
import { Link } from "react-router-dom";

const subTitle = "Choose Any Products";
const title = "Buy Everything with Us";
const btnText = "Get Started Now";

const categoryList = [
  {
    imgUrl: "src/assets/images/category/01.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    iconName: <BsShopWindow />,
    title: "DSLR Camera",
  },
  {
    imgUrl: "src/assets/images/category/02.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    iconName: <BsShopWindow />,
    title: "Shoes",
  },
  {
    imgUrl: "src/assets/images/category/03.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    iconName: <BsShopWindow />,
    title: "Photography",
  },
  {
    imgUrl: "src/assets/images/category/04.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    iconName: <BsShopWindow />,
    title: "Formal Dress",
  },
  {
    imgUrl: "src/assets/images/category/05.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    iconName: <BsShopWindow />,
    title: "Colorful Bags",
  },
  {
    imgUrl: "src/assets/images/category/06.jpg",
    imgAlt: "category rajibraj91 rajibraj",
    iconName: <BsShopWindow />,
    title: "Home Decor",
  },
];

export default function HomeCategory() {
  return (
    <div className="container mx-auto p-4 sm:p-0">
      <div>
        {/* Category Text */}
        <div className="flex items-center flex-col gap-4 p-4 mb-8">
          <span className="text-2xl text-yellow-300 font-normal">
            {subTitle}
          </span>
          <h2 className="text-4xl text-gray-700 font-semibold">{title}</h2>
        </div>

        {/* Category Card */}
        <div className="grid md:grid-cols-3 grid-cols-2 gap-4">
          {categoryList.map((category, i) => (
            <div key={i} className="hover:-translate-y-2 transition group">
              <Link to="/shop">
                {/* Category Image */}
                <div className="relative rounded overflow-hidden border border-slate-100 custom-category-card">
                  <img
                    src={category.imgUrl}
                    alt={category.imgAlt}
                    className="rounded"
                  />
                  {/* Category Content */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-2">
                    <span className="p-2 rounded-full text-white bg-yellow-500 group-hover:bg-white group-hover:text-yellow-500">
                      {category.iconName}
                    </span>
                    <span className="text-lg text-white font-normal group-hover:text-yellow-500">
                      {category.title}
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}

          {/* Category Start Button */}
          <div className="col-span-full mt-4 flex items-center justify-center">
            <Link
              to="/shop"
              className="bg-white border border-yellow-500 py-2 px-4 rounded text-yellow-500 hover:bg-yellow-100 text-lg hover:-translate-y-2 transition"
            >
              {btnText}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
