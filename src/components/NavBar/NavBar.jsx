import React, { useContext, useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaBars,
  FaTimes,
  FaShoppingCart,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "All Equipment", path: "/all-equipment" },
    { name: "Add Equipment", path: "/add-equipment" },
    { name: "My Equipment List", path: "/my-equipment-list" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 dark:bg-gray-800 bg-gray-500 z-50 shadow-lg text-white">
      <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto">
        <div className="text-3xl font-bold text-yellow-400 dark:text-yellow-600">
          SportsGear
        </div>

        <div className="hidden lg:flex items-center space-x-6">
          <ul className="flex space-x-6">
            {menuItems.map(
              (item) =>
                (!item.private || (item.private && user)) && (
                  <Link
                    to={item.path}
                    key={item.name}
                    className="group relative inline-block overflow-hidden rounded px-4 py-2 text-sm font-medium text-gray-100 dark:text-white hover:text-yellow-700 dark:hover:text-yellow-600 active:bg-amber-950 dark:active:bg-yellow-200 active:text-white dark:active:text-gray-900 whitespace-nowrap"
                  >
                    <span className="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-yellow-300 dark:border-yellow-600 transition-all duration-900 group-hover:w-full"></span>
                    <span className="ease absolute right-0 bottom-0 h-0 w-0 border-r-2 border-yellow-500 dark:border-yellow-600 transition-all duration-900 group-hover:h-full"></span>
                    <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-yellow-500 dark:border-yellow-600 transition-all duration-900 group-hover:w-full"></span>
                    <span className="ease absolute top-0 left-0 h-0 w-0 border-l-2 border-yellow-500 dark:border-yellow-600 transition-all duration-900 group-hover:h-full"></span>
                    {item.name}
                  </Link>
                )
            )}
            <li>
              <ThemeToggle />
            </li>
          </ul>

          {user ? (
            <>
              <div className="relative group cursor-pointer">
                <img
                  src={user.photoURL}
                  alt="User"
                  className="w-10 h-10 rounded-full border-2 border-yellow-500 dark:border-yellow-600"
                />
                <div className="absolute top-12 right-0 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-900 text-sm p-2 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50 whitespace-nowrap">
                  {user.displayName || "No Name"}
                </div>
              </div>
              <button
                onClick={logOut}
                className="group relative inline-block overflow-hidden rounded px-4 py-2 text-sm font-medium text-gray-100 dark:text-gray-100 hover:text-yellow-700 dark:hover:text-yellow-600 active:bg-amber-950 dark:active:bg-yellow-200 active:text-white dark:active:text-gray-900 whitespace-nowrap"
              >
                <span className="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-yellow-300 dark:border-yellow-600 transition-all duration-900 group-hover:w-full"></span>
                <span className="ease absolute right-0 bottom-0 h-0 w-0 border-r-2 border-yellow-500 dark:border-yellow-600 transition-all duration-900 group-hover:h-full"></span>
                <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-yellow-500 dark:border-yellow-600 transition-all duration-900 group-hover:w-full"></span>
                <span className="ease absolute top-0 left-0 h-0 w-0 border-l-2 border-yellow-500 dark:border-yellow-600 transition-all duration-900 group-hover:h-full"></span>
                Log Out
              </button>
            </>
          ) : (
            <div className="flex space-x-4">
              <Link
                to="/login"
                className="group relative inline-block overflow-hidden rounded px-4 py-2 text-sm font-medium text-gray-100 dark:text-gray-100 hover:text-yellow-700 dark:hover:text-yellow-600 active:bg-amber-950 dark:active:bg-yellow-200 active:text-white dark:active:text-gray-900 whitespace-nowrap"
              >
                <span className="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-yellow-300 dark:border-yellow-600 transition-all duration-900 group-hover:w-full"></span>
                <span className="ease absolute right-0 bottom-0 h-0 w-0 border-r-2 border-yellow-500 dark:border-yellow-600 transition-all duration-900 group-hover:h-full"></span>
                <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-yellow-500 dark:border-yellow-600 transition-all duration-900 group-hover:w-full"></span>
                <span className="ease absolute top-0 left-0 h-0 w-0 border-l-2 border-yellow-500 dark:border-yellow-600 transition-all duration-900 group-hover:h-full"></span>
                Login
              </Link>
              <Link
                to="/register"
                className="group relative inline-block overflow-hidden rounded px-4 py-2 text-sm font-medium text-gray-100 dark:text-gray-100 hover:text-yellow-700 dark:hover:text-yellow-600 active:bg-amber-950 dark:active:bg-yellow-200 active:text-white dark:active:text-gray-900 whitespace-nowrap"
              >
                <span className="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-yellow-300 dark:border-yellow-600 transition-all duration-900 group-hover:w-full"></span>
                <span className="ease absolute right-0 bottom-0 h-0 w-0 border-r-2 border-yellow-500 dark:border-yellow-600 transition-all duration-900 group-hover:h-full"></span>
                <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-yellow-500 dark:border-yellow-600 transition-all duration-900 group-hover:w-full"></span>
                <span className="ease absolute top-0 left-0 h-0 w-0 border-l-2 border-yellow-500 dark:border-yellow-600 transition-all duration-900 group-hover:h-full"></span>
                Register
              </Link>
            </div>
          )}
        </div>

        <div className="lg:hidden flex items-center space-x-4">
          <Link
            to="/cart"
            className="text-gray-100 dark:text-gray-900 hover:text-yellow-700 dark:hover:text-yellow-600"
          >
            <FaShoppingCart size={24} />
          </Link>
          {user && (
            <img
              src={user.photoURL}
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
          )}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-100 dark:text-gray-900 hover:text-yellow-700 dark:hover:text-yellow-600"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </nav>

      <div
        className={`lg:hidden fixed top-[72px] left-0 w-64 bg-gray-900 dark:bg-gray-100 shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="flex flex-col p-4 space-y-4">
          {menuItems.map(
            (item) =>
              (!item.private || (item.private && user)) && (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-100 dark:text-gray-900 hover:text-yellow-700 dark:hover:text-yellow-600 py-2"
                >
                  {item.name}
                </Link>
              )
          )}
          <li>
            <ThemeToggle />
          </li>
          {!user && (
            <>
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="text-gray-100 dark:text-gray-900 hover:text-yellow-700 dark:hover:text-yellow-600 py-2"
              >
                Login
              </Link>
              <Link
                to="/register"
                onClick={() => setIsOpen(false)}
                className="text-gray-100 dark:text-gray-900 hover:text-yellow-700 dark:hover:text-yellow-600 py-2"
              >
                Register
              </Link>
            </>
          )}
          {user && (
            <button
              onClick={() => {
                logOut();
                setIsOpen(false);
              }}
              className="text-gray-100 dark:text-gray-900 hover:text-yellow-700 dark:hover:text-yellow-600 py-2 text-left"
            >
              Log Out
            </button>
          )}
        </ul>
      </div>

      <div className="fixed bottom-10 left-10 flex flex-col space-y-4 z-50 hidden lg:flex">
        {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, i) => (
          <a
            key={i}
            href="#"
            className="text-gray-800 dark:text-gray-200 hover:text-yellow-400 dark:hover:text-yellow-600 hover:scale-125 transition-all duration-300"
          >
            <Icon />
          </a>
        ))}
        <div className="w-10 h-1 bg-yellow-400 dark:bg-yellow-600 mt-4"></div>
      </div>
    </div>
  );
};

export default NavBar;
