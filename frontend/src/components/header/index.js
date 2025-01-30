import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="flex justify-between items-center max-w-screen-xl mx-auto">
        <h1 className="text-4xl font-extrabold">Cron Bay</h1>
        <nav className="flex items-center gap-6">
          <Link
            to="/poster"
            className="text-lg font-medium hover:text-blue-400 transition duration-300"
          >
            Poster
          </Link>
          <Link
            to="/bidder"
            className="text-lg font-medium hover:text-blue-400 transition duration-300"
          >
            Bidder
          </Link>
          <button className="border border-gray-300 text-white bg-blue-600 p-2 rounded-lg hover:bg-blue-700 transition duration-300">
            Sign In
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
