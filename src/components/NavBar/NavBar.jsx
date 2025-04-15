import React, { useContext, useState } from "react";
import { FaBars, FaTimes, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  const userName = user?.displayName || "User";
  const userPhoto = user?.photoURL || 
    `https://ui-avatars.com/api/?name=${encodeURIComponent(userName)}&background=random`;

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "All Equipment", path: "/all-equipment" },
    { name: "Add Equipment", path: "/add-equipment"},
    { name: "My Equipment List", path: "/my-equipment-list"},
  ];

  return (
    <div className="fixed top-0 left-0 right-0 dark:bg-gray-800 bg-gray-500 z-50 shadow-lg text-white">
      <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="text-3xl font-bold text-yellow-400 dark:text-yellow-600">
          SportsGear
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-6">
          <ul className="flex space-x-6">
            {menuItems.map((item) => (
              (!item.private || (item.private && user)) && (
                <Link
                  to={item.path}
                  key={item.name}
                  className="group relative inline-block overflow-hidden rounded px-4 py-2 text-sm font-medium hover:text-yellow-400"
                >
                  {item.name}
                </Link>
              )
            ))}
            <li>
              <ThemeToggle />
            </li>
          </ul>

          {user ? (
            <>
              <div className="relative group cursor-pointer">
                <img
                  src={userPhoto}
                  alt="User"
                  className="w-10 h-10 rounded-full border-2 border-yellow-500"
                  onError={(e) => {
                    e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(userName)}&background=random`;
                  }}
                />
                <div className="absolute top-12 right-0 bg-gray-800 text-white text-sm p-2 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50 whitespace-nowrap">
                  {userName}
                </div>
              </div>
              <button
                onClick={logOut}
                className="px-4 py-2 rounded-md hover:text-yellow-400"
              >
                Log Out
              </button>
            </>
          ) : (
            <div className="flex space-x-4">
              <Link to="/login" className="px-4 py-2 rounded-md hover:text-yellow-400">
                Login
              </Link>
              <Link to="/register" className="px-4 py-2 rounded-md hover:text-yellow-400">
                Register
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center space-x-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:text-yellow-400"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-[72px] left-0 w-64 bg-gray-800 shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="flex flex-col p-4 space-y-4">
          {menuItems.map((item) => (
            (!item.private || (item.private && user)) && (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-yellow-400 py-2"
              >
                {item.name}
              </Link>
            )
          ))}
          <li>
            <ThemeToggle />
          </li>
          {!user ? (
            <>
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-yellow-400 py-2"
              >
                Login
              </Link>
              <Link
                to="/register"
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-yellow-400 py-2"
              >
                Register
              </Link>
            </>
          ) : (
            <button
              onClick={() => {
                logOut();
                setIsOpen(false);
              }}
              className="text-white hover:text-yellow-400 py-2 text-left"
            >
              Log Out
            </button>
          )}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;