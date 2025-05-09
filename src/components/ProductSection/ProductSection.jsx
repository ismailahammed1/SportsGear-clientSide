import React, { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const ProductSection = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://sportsgear-servertside-production.up.railway.app/allequipments")
      .then((res) => res.json())
      .then((data) => {
        // Limit to 6 products on the frontend
        setProducts(data.slice(0, 6));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <section className="py-12 dark:bg-gray-900 light:bg-gray-100 text-gray-900 dark:text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-yellow-500 dark:text-yellow-400 text-center mb-8">
          Featured Products
        </h2>
        <Fade cascade damping={0.2}>
          <div className="grid md:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product._id}
                className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg"
              >
              <img
                src={product.image}
                alt={product.itemName}
                className="w-full h-40 object-cover rounded-md"
              />
              <h3 className="text-xl mt-4">{product.itemName}</h3>
              <p className="text-yellow-500 dark:text-yellow-400">${product.price}</p>
              <Link
                to={`/equipment/${product._id}`}
                className="block mt-4 bg-yellow-400 dark:bg-yellow-600 text-gray-900 dark:text-white text-center py-2 rounded-lg font-semibold hover:bg-yellow-500 dark:hover:bg-yellow-700"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </Fade>
    </div>
    <Link
      to="/all-equipment"
      className="block w-48 mx-auto mt-8 bg-yellow-400 dark:bg-yellow-600 text-gray-900 dark:text-white text-center py-2 rounded-lg font-semibold hover:bg-yellow-500 dark:hover:bg-yellow-700"
    >
      View More
    </Link>
  </section>
  
  );
};

export default ProductSection;