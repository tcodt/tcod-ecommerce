import { useEffect, useState } from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function NavItems() {
  const [menuToggle, setMenuToggle] = useState(false);
  const [socialToggle, setSocialToggle] = useState(false);
  const [headerFixed, setHeaderFixed] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setMenuToggle(false);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // addevent listener
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      setHeaderFixed(true);
    } else {
      setHeaderFixed(false);
    }
  });

  return (
    <header className="z-[999] relative">
      <div
        className={`p-4 ${
          headerFixed
            ? "fixed w-full animate-fade-up bg-white bg-opacity-50 backdrop-blur-sm shadow-lg"
            : ""
        }`}
      >
        {/* Header top start */}
        <div className={`${socialToggle ? "md:block" : "hidden"} pb-4`}>
          <div className="container mx-auto px-4 sm:p-0">
            <div className="flex items-center justify-between">
              <Link
                to="/signup"
                className="py-2 px-4 rounded-md bg-yellow-500 text-white hover:-translate-y-2 transition"
              >
                <span>Create Account</span>
              </Link>
              <Link to="/login">
                <span className="text-gray-600 font-semibold">Login</span>
              </Link>
            </div>
          </div>
        </div>
        {/* Header button */}
        <div
          className={`container mx-auto px-4 sm:p-0 ${
            socialToggle ? "pt-4" : ""
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div>
              <Link to="/">
                <span className="text-purple-500 text-3xl font-bold text-shadow">
                  TCOD
                </span>
                <span className="text-yellow-500 text-3xl font-bold text-shadow">
                  SHOP🛒
                </span>
              </Link>
            </div>
            {/* Menu area */}
            <div className="flex items-center gap-8 relative">
              <ul
                className={`lg:block ${
                  menuToggle
                    ? "absolute top-[55px] right-0 p-4 w-[200px] bg-slate-200 flex flex-col gap-4 shadow-md rounded"
                    : "hidden"
                }`}
              >
                <li className="inline-block lg:mx-6 mx-2">
                  <Link
                    to="/"
                    className="text-gray-800 text-base font-semibold hover:text-purple-500 transition block"
                  >
                    Home
                  </Link>
                </li>
                <li className="inline-block lg:mx-6 mx-2">
                  <Link
                    to="/shop"
                    className="text-gray-800 text-base font-semibold hover:text-purple-500 transition block"
                  >
                    Shop
                  </Link>
                </li>
                <li className="inline-block lg:mx-6 mx-2">
                  <Link
                    to="/blog"
                    className="text-gray-800 text-base font-semibold hover:text-purple-500 transition block"
                  >
                    Blog
                  </Link>
                </li>
                <li className="inline-block lg:mx-6 mx-2">
                  <Link
                    to="/about"
                    className="text-gray-800 text-base font-semibold hover:text-purple-500 transition block"
                  >
                    About
                  </Link>
                </li>
                <li className="inline-block lg:mx-6 mx-2">
                  <Link
                    to="/contact"
                    className="text-gray-800 text-base font-semibold hover:text-purple-500 transition block"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
              {/* Signin & Login */}
              <div className="flex items-center gap-4">
                <Link
                  to="/sign-in"
                  className="md:block hidden bg-yellow-500 text-white py-2 px-4 rounded-md hover:-translate-y-2 transition"
                >
                  Create Account
                </Link>
                <Link
                  to="/login"
                  className="md:block hidden text-gray-600 font-semibold text-base"
                >
                  Login
                </Link>
              </div>
              {/* Menu toggler */}
              <div
                onClick={() => setMenuToggle(!menuToggle)}
                className="cursor-pointer md:hidden flex flex-col items-center justify-center w-10 h-10"
              >
                <span
                  className={`block w-8 h-1 bg-purple-500 mb-2 transition-all duration-300 ${
                    menuToggle
                      ? "transform -rotate-45 translate-y-[9px] translate-x-[0px] origin-right"
                      : ""
                  }`}
                ></span>
                <span
                  className={`block w-8 h-1 bg-slate-500 mb-2 transition-all duration-300 ${
                    menuToggle ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`block w-8 h-1 bg-yellow-500 mb-2 transition-all duration-300 ${
                    menuToggle
                      ? "transform rotate-45 translate-y-2 origin-right"
                      : ""
                  }`}
                ></span>
              </div>
              {/* Social toggler */}
              <div
                onClick={() => setSocialToggle(!socialToggle)}
                className="md:hidden cursor-pointer"
              >
                <BsInfoCircleFill className="text-purple-500" size={30} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
