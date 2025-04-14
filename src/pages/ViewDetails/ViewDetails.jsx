// src/pages/ViewDetails/ViewDetails.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import Swal from "sweetalert2";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

const ViewDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [equipment, setEquipment] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/equipments/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setEquipment(data);
        } else {
          setEquipment(null);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setLoading(false);
      });
  }, [id]);

  const handleAddToCart = () => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = cartItems.find((item) => item._id === id);

    if (existingItem) {
      Swal.fire({
        title: "Already in Cart",
        text: "This item is already in your cart.",
        icon: "info",
        confirmButtonText: "OK",
      });
    } else {
      cartItems.push(equipment);
      localStorage.setItem("cart", JSON.stringify(cartItems));

      Swal.fire({
        title: "Added to Cart!",
        text: `"${equipment.itemName}" has been added to your cart.`,
        icon: "success",
        confirmButtonText: "OK",
      });
    }
  };

  if (loading) {
    return <LoadingSpinner/>
  }

  if (!equipment) {
    return (
      <div className="h-screen flex justify-center items-center text-red-500">
        <p>Item not found!</p>
      </div>
    );
  }

  return (
    <section className=" py-12 px-4 md:px-8 bg-gray-900 text-white min-h-screen">
      <Fade>
        <div className="max-w-4xl mt-12 mx-auto bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col md:flex-row gap-6">
          <img
            src={equipment.image}
            alt={equipment.itemName}
            className="w-full md:w-1/2 h-80 object-cover rounded-lg shadow-md"
          />
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-yellow-400 mb-2">{equipment.itemName}</h2>
            <p className="text-gray-300 mb-2">
              <strong>Category:</strong> {equipment.category} {equipment.subCategory && `> ${equipment.subCategory}`}
            </p>
            <p className="mb-4 text-sm text-gray-400">{equipment.description}</p>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <p><strong>Price:</strong> ${equipment.price}</p>
              <p><strong>Rating:</strong> ⭐ {equipment.rating}/5</p>
              <p><strong>Customization:</strong> {equipment.customization || "N/A"}</p>
              <p><strong>Processing Time:</strong> {equipment.processingTime}</p>
              <p><strong>Stock Status:</strong> {equipment.stockStatus}</p>
              <p><strong>Seller Name:</strong> {equipment.userName}</p>
              <p><strong>Seller Email:</strong> {equipment.userEmail}</p>
            </div>

            <div className="mt-6 flex gap-4">
              <button
                onClick={() => navigate(-1)}
                className="px-4 py-2 bg-yellow-400 text-gray-900 font-semibold rounded-md hover:bg-yellow-500 transition duration-300"
              >
                ← Back
              </button>

              <button
                onClick={handleAddToCart}
                className="px-4 py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition duration-300"
              >
                🛒 Add to Cart
              </button>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default ViewDetails;