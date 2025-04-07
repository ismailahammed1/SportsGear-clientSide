import React from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

const NotFoundPage = () => {
  return (
    <section className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <Fade direction="down">
        <h1 className="text-7xl font-bold text-yellow-400 mb-4">404</h1>
        <h2 className="text-3xl font-semibold mb-6">Oops! Page Not Found</h2>
      </Fade>

      <Fade delay={300}>
        <p className="text-lg text-gray-400 mb-6 text-center">
          The page you are looking for might have been removed or does not exist.
        </p>

        <Link
          to="/"
          className="px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg hover:bg-yellow-500 transition"
        >
          Go Home
        </Link>
      </Fade>
    </section>
  );
};

export default NotFoundPage;
