import { useState } from "react";
import productData from "../products.json";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import SelectedCategory from "../components/SelectedCategory";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const title = (
  <h1>
    Search Your One From <span className="text-yellow-500">Thousand</span> Of
    Products
  </h1>
);

const desc = "We have the largest collections of products";

const bannerList = [
  {
    iconName: null,
    text: "1.5 Million Customers",
  },
  {
    iconName: null,
    text: "Best Quality",
  },
  {
    iconName: null,
    text: "Buy Anything Online",
  },
];

export default function Banner() {
  const [searchInput, setSearchInput] = useState("");
  const [filterProducts, setFilterProducts] = useState(productData);

  // Search functionality
  const handleSearch = (e) => {
    let searchTerm = e.target.value;
    setSearchInput(searchTerm);

    // Filtering products based on search
    const filtered = productData.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilterProducts(filtered);
  };

  return (
    <div className="landing-background h-screen flex items-center justify-center relative overflow-hidden before:content-[''] before:absolute before:-bottom-4 before:left-2 before:w-full before:h-24 before:bg-white before:bg-opacity-100 before:blur-md">
      <div className="w-[600px] flex flex-col gap-4 z-10 mt-8">
        <div className="text-4xl text-gray-600 font-semibold text-center">
          {title}
        </div>

        <form className="flex items-center md:gap-8 gap-2 px-4 md:p-0">
          <SelectedCategory select={"all"} />
          <label className="relative flex-1">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search your product"
              value={searchInput}
              onChange={handleSearch}
              className="w-full shadow-lg rounded-full bg-transparent text-lg p-4 border border-slate-100 focus-visible:outline-purple-500 text-gray-700"
            />
            <button type="submit" className="absolute top-4 right-4">
              <CiSearch className="text-gray-500" size={30} />
            </button>
          </label>
        </form>

        <p className="text-center text-lg text-gray-500">{desc}</p>
        <ul
          className="flex flex-wrap gap-2 p-2 max-h-[300px] overflow-y-auto
  [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-gray-300
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
        >
          {searchInput &&
            filterProducts.map((product, i) => (
              <li key={i} className="p-1 bg-slate-200 rounded shadow-sm w-full">
                <Link
                  to={`/shop/${product.id}`}
                  className="flex gap-4 rounded relative"
                >
                  <img
                    src={product.img}
                    alt={product.name}
                    className="h-20 object-cover rounded"
                  />
                  <div className="w-full p-2">
                    <span className="text-gray-600 font-normal">
                      {product.name}
                    </span>
                  </div>
                  <span className="flex items-center gap-1 text-gray-500 font-semibold absolute bottom-2 right-2">
                    {product.ratings}
                    {product.ratings >= 5 ? (
                      <FaStar size={15} className="text-amber-500" />
                    ) : (
                      <FaStarHalfAlt size={15} className="text-amber-500" />
                    )}
                  </span>
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
