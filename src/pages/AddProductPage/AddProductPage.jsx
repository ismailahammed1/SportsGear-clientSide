import React, { useContext, useState } from "react";
import { Fade } from "react-awesome-reveal";
import Swal from "sweetalert2";
import { AuthContext } from "../../context/AuthProvider";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const AddProductPage = () => {
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const { user } = useContext(AuthContext);
  const userName = user?.displayName || "";
  const userEmail = user?.email || "";
  const navigate = useNavigate(); // Initialize useNavigate

  const handleAddProducts = async (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const itemName = form.itemName.value;
    const description = form.description.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const customization = form.customization.value;
    const processingTime = form.processingTime.value;
    const stockStatus = form.stockStatus.value;
    const userName = form.userName.value;
    const userEmail = form.userEmail.value;

    const formData = {
      image,
      itemName,
      category,
      subCategory,
      description,
      price,
      rating,
      customization,
      processingTime,
      stockStatus,
      userName,
      userEmail,
    };

    console.log("Form Data:", formData);

    try {
      const response = await fetch("http://localhost:5000/equipments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log("Server Response:", data);

      // Show success alert and navigate
      Swal.fire({
        position: 'center',
        title: "Success!",
        text: "Product added successfully!",
        icon: "success",
        confirmButtonColor: "#FFD700",
      }).then(() => {
        navigate("/all-equipment"); // Navigate to /all-equipment
      });
    } catch (error) {
      console.error("Error adding product:", error);

      // Show error alert
      Swal.fire({
        position: 'center',
        title: "Error!",
        text: "Failed to add product. Please try again!",
        icon: "error",
        confirmButtonColor: "#FF5733",
      });
    }
  };

  return (
    <section className="py-12 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <Fade direction="down">
          <h2 className="text-3xl font-bold text-yellow-400 text-center mb-8 mt-16">
            Add a New Product
          </h2>
        </Fade>

        <Fade>
          <form
            onSubmit={handleAddProducts}
            className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-2xl mx-auto"
          >
            {/* Image Upload */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">
                Upload Image
              </label>
              <input
                type="text"
                name="image"
                required
                className="w-full bg-gray-700 text-white px-3 py-2 rounded-md"
              />
            </div>

            {/* Item Name */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">
                Item Name
              </label>
              <input
                type="text"
                name="itemName"
                required
                className="w-full bg-gray-700 text-white px-3 py-2 rounded-md"
              />
            </div>

            {/* Category */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Category</label>
              <select
                name="category"
                required
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full bg-gray-700 text-white px-3 py-2 rounded-md"
              >
                <option value="">Select Category</option>
                <option value="Football">Football</option>
                <option value="Cricket">Cricket</option>
              </select>
            </div>

            {/* Subcategory (Shows only if Football or Cricket is selected) */}
            {category && (
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">
                  Subcategory
                </label>
                <select
                  name="subCategory"
                  required
                  value={subCategory}
                  onChange={(e) => setSubCategory(e.target.value)}
                  className="w-full bg-gray-700 text-white px-3 py-2 rounded-md"
                >
                  <option value="">Select Subcategory</option>
                  {category === "Football" && (
                    <>
                      <option value="Football Boots">Football Boots</option>
                      <option value="Football Jerseys">Football Jerseys</option>
                      <option value="Shin Guards">Shin Guards</option>
                    </>
                  )}
                  {category === "Cricket" && (
                    <>
                      <option value="Bats">Bats</option>
                      <option value="Balls">Balls</option>
                      <option value="Gloves">Gloves</option>
                      <option value="Gloves">helmate</option>
                    </>
                  )}
                </select>
              </div>
            )}

            {/* Description */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">
                Description
              </label>
              <textarea
                name="description"
                required
                className="w-full bg-gray-700 text-white px-3 py-2 rounded-md"
              ></textarea>
            </div>

            {/* Price & Rating */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Price ($)
                </label>
                <input
                  type="number"
                  name="price"
                  required
                  className="w-full bg-gray-700 text-white px-3 py-2 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Rating (1-5)
                </label>
                <input
                  type="number"
                  name="rating"
                  min="1"
                  max="5"
                  required
                  className="w-full bg-gray-700 text-white px-3 py-2 rounded-md"
                />
              </div>
            </div>

            {/* Customization */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">
                Customization
              </label>
              <input
                type="text"
                name="customization"
                className="w-full bg-gray-700 text-white px-3 py-2 rounded-md"
              />
            </div>

            {/* Processing Time */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">
                Processing Time
              </label>
              <input
                type="text"
                name="processingTime"
                required
                className="w-full bg-gray-700 text-white px-3 py-2 rounded-md"
              />
            </div>

            {/* Stock Status */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">
                Stock Status
              </label>
              <select
                name="stockStatus"
                required
                className="w-full bg-gray-700 text-white px-3 py-2 rounded-md"
              >
                <option value="">Select Status</option>
                <option value="In Stock">In Stock</option>
                <option value="Out of Stock">Out of Stock</option>
              </select>
            </div>
            {/* User Name (read-only) */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">
                Your Name
              </label>
              <input
                type="text"
                name="userName"
                value={userName}
                readOnly
                className="w-full bg-gray-700 text-white px-3 py-2 rounded-md cursor-not-allowed opacity-75"
              />
            </div>

            {/* User Email (read-only) */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">
                Your Email
              </label>
              <input
                type="email"
                name="userEmail"
                value={userEmail}
                readOnly
                className="w-full bg-gray-700 text-white px-3 py-2 rounded-md cursor-not-allowed opacity-75"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full mt-4 px-4 py-2 bg-yellow-400 text-gray-900 font-semibold rounded-md hover:bg-yellow-500 transition-colors duration-300"
            >
              Add Product
            </button>
          </form>
        </Fade>
      </div>
    </section>
  );
};

export default AddProductPage;