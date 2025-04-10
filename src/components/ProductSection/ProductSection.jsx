import React, { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";



const ProductSection = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/allequipments?limit=6") 
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false); 
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return <LoadingSpinner />; 
  }

  return (
    <section className="py-12 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-yellow-400 text-center mb-8">
          Featured Products
        </h2>
        <Fade cascade damping={0.2}>
          <div className="grid md:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product._id} className="bg-gray-800 p-4 rounded-lg shadow-lg">
                <img src={product.image} alt={product.itemName} className="w-full h-40 object-cover rounded-md" />
                <h3 className="text-xl mt-4">{product.itemName}</h3>
                <p className="text-yellow-400">${product.price}</p>
                <Link to={`/equipment/${product._id}`} className="block mt-4 bg-yellow-400 text-gray-900 text-center py-2 rounded-lg font-semibold hover:bg-yellow-500">
                  View Details
                </Link>
              </div>
            ))}
          </div>
        </Fade>
      </div>
      <Link 
      className="w-50 items-center mx-auto block mt-4 bg-yellow-400 text-gray-900 text-center py-2 rounded-lg font-semibold hover:bg-yellow-500"
      >
      
      View More</Link>
    </section>
  );
};

export default ProductSection;
