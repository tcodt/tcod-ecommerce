import { useState } from "react";
import { Link } from "react-router-dom";

const title = "Our Products";

const ProductData = [
  {
    imgUrl: "src/assets/images/categoryTab/01.jpg",
    cate: "Shoes",
    title: "Nike Premier X",
    author: "assets/images/course/author/01.jpg",
    brand: "Nike",
    price: "$199.00",
    id: 1,
  },
  {
    imgUrl: "src/assets/images/categoryTab/02.jpg",
    cate: "Bags",
    title: "Asthetic Bags",
    author: "assets/images/course/author/02.jpg",
    brand: "D&J Bags",
    price: "$199.00",
    id: 2,
  },
  {
    imgUrl: "src/assets/images/categoryTab/03.jpg",
    cate: "Phones",
    title: "iPhone 12",
    author: "src/assets/images/categoryTab/brand/apple.png",
    brand: "Apple",
    price: "$199.00",
    id: 3,
  },
  {
    imgUrl: "src/assets/images/categoryTab/04.jpg",
    cate: "Bags",
    title: "Hiking Bag 15 Nh100",
    author: "assets/images/course/author/04.jpg",
    brand: "Gucci",
    price: "$199.00",
    id: 4,
  },
  {
    imgUrl: "src/assets/images/categoryTab/05.jpg",
    cate: "Shoes",
    title: "Outdoor Sports Shoes",
    author: "assets/images/course/author/05.jpg",
    brand: "Nike",
    price: "$199.00",
    id: 5,
  },
  {
    imgUrl: "src/assets/images/categoryTab/06.jpg",
    cate: "Beauty",
    title: "COSRX Snail Mucin",
    author: "assets/images/course/author/06.jpg",
    brand: "Zaara",
    price: "$199.00",
    id: 6,
  },
  {
    imgUrl: "src/assets/images/categoryTab/07.jpg",
    cate: "Bags",
    title: "Look Less Chanel Bag ",
    author: "assets/images/course/author/01.jpg",
    brand: "Gucci",
    price: "$199.00",
    id: 7,
  },
  {
    imgUrl: "src/assets/images/categoryTab/08.jpg",
    cate: "Shoes",
    title: "Casual Sneakers",
    author: "assets/images/course/author/02.jpg",
    brand: "Bata",
    price: "$199.00",
    id: 8,
  },
];

export default function CategoryShowCase() {
  const [items, setItems] = useState(ProductData);

  // category based filtering
  const filterItem = (categoryItem) => {
    const updateItems = ProductData.filter((curElem) => {
      return curElem.cate === categoryItem;
    });

    setItems(updateItems);
  };

  return (
    <div className="mt-24 p-4 relative custom-product-background z-50">
      {/* Shapes */}
      <div className="absolute top-0 left-0 -z-10">
        <img src="/src/assets/images/shape-img/icon/01.png" alt="Shape1" />
      </div>
      <div className="absolute bottom-0 right-0 -z-10">
        <img src="/src/assets/images/shape-img/icon/02.png" alt="Shape2" />
      </div>

      {/* Main Section */}
      <div className="container mx-auto z-50 mt-4">
        {/* Main Section Header */}
        <div className="p-6 bg-white bg-opacity-50 backdrop-blur-sm border border-slate-100 rounded shadow-sm flex flex-col gap-8">
          <div className="flex flex-col gap-4 sm:gap-0 sm:flex-row items-center justify-between">
            <h3 className="text-3xl font-semibold text-gray-700">{title}</h3>
            <div>
              <ul className="flex items-center gap-6 *:text-base *:text-gray-700 *:font-medium *:cursor-pointer">
                <li
                  onClick={() => setItems(ProductData)}
                  className="py-1 px-3 bg-white transition hover:text-white rounded hover:bg-yellow-500"
                >
                  All
                </li>
                <li
                  onClick={() => filterItem("Shoes")}
                  className="py-1 px-3 bg-white transition hover:text-white rounded hover:bg-yellow-500"
                >
                  Shoes
                </li>
                <li
                  onClick={() => filterItem("Bags")}
                  className="py-1 px-3 bg-white transition hover:text-white rounded hover:bg-yellow-500"
                >
                  Bags
                </li>
                <li
                  onClick={() => filterItem("Phones")}
                  className="py-1 px-3 bg-white transition hover:text-white rounded hover:bg-yellow-500"
                >
                  Phones
                </li>
                <li
                  onClick={() => filterItem("Beauty")}
                  className="py-1 px-3 bg-white transition hover:text-white rounded hover:bg-yellow-500"
                >
                  Beauty
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Main Section Body */}
        <div className="container mx-auto mt-8">
          <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="border border-slate-100 shadow-sm rounded flex flex-col gap-2"
              >
                <div className="relative">
                  <Link to={`/shop/${item.id}`}>
                    <img
                      src={item.imgUrl}
                      alt={item.title}
                      className="rounded w-full"
                    />
                  </Link>
                  <div className="absolute bottom-0 left-0 bg-yellow-500 bg-opacity-50 p-1 w-full">
                    <span className="text-base text-gray-800 font-medium">
                      {item.cate}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2 p-3">
                  <Link
                    to={`/shop/${item.id}`}
                    className="text-lg text-gray-800 font-medium line-clamp-1"
                  >
                    {item.title}
                  </Link>
                  <hr />
                  <div className="flex tems-center justify-between">
                    <Link
                      to="/"
                      className="text-base text-gray-600 font-normal"
                    >
                      {item.brand}
                    </Link>
                    <span className="text-base text-yellow-500 font-normal">
                      {item.price}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
