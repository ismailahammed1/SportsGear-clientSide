import React, { useContext, useState } from "react";
import { useNavigate, useLoaderData } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import Swal from "sweetalert2";
import { AuthContext } from "../../context/AuthProvider";

const UpdateEquipmentPage = () => {
  const equipmentValue = useLoaderData();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useContext(AuthContext);
  const {
    _id,
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
  } = equipmentValue;

  const handleUpdateProduct = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const form = e.target;
    const price = parseFloat(form.price.value);
  const rating = parseFloat(form.rating.value);
  
  if (price <= 0) {
    Swal.fire("Error!", "Price must be greater than 0", "error");
    return;
  }
  if (rating < 1 || rating > 5) {
    Swal.fire("Error!", "Rating must be between 1 and 5", "error");
    return;
  }
    const updatedEquipment = {
      image: form.image.value,
      itemName: form.itemName.value,
      category: form.category.value,
      subCategory: form.subCategory.value,
      description: form.description.value,
      price: form.price.value,
      rating: form.rating.value,
      customization: form.customization.value,
      processingTime: form.processingTime.value,
      stockStatus: form.stockStatus.value,
      userName: user?.displayName || "Unknown",
      userEmail: user?.email || "Unknown",
    };

    try {
      const res = await fetch(`http://localhost:5000/equipments/${_id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedEquipment),
      });

      if (res.ok) {
        Swal.fire("Updated!", "Equipment updated successfully.", "success");
        navigate("/my-equipment-list");
      } else {
        throw new Error("Update failed");
      }
    } catch (error) {
      Swal.fire("Error!", "Could not update the equipment.", "error");
    }finally {
      setIsLoading(false);
    }

  };

  return (
    <section className="py-12 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <Fade direction="down">
          <h2 className="text-3xl font-bold text-yellow-400 text-center mb-8">
            Update Product
          </h2>
        </Fade>

        <Fade>
          <form
            onSubmit={handleUpdateProduct}
            className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-2xl mx-auto"
          >
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Upload Image</label>
              <input
                type="text"
                name="image"
                defaultValue={image}
                required
                className="w-full bg-gray-700 text-white px-3 py-2 rounded-md"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Item Name</label>
              <input
                type="text"
                name="itemName"
                defaultValue={itemName}
                required
                className="w-full bg-gray-700 text-white px-3 py-2 rounded-md"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Category</label>
              <select
                name="category"
                defaultValue={category}
                required
                className="w-full bg-gray-700 text-white px-3 py-2 rounded-md"
              >
                <option value="">Select Category</option>
                <option value="Football">Football</option>
                <option value="Cricket">Cricket</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Subcategory</label>
              <select
                name="subCategory"
                defaultValue={subCategory}
                required
                className="w-full bg-gray-700 text-white px-3 py-2 rounded-md"
              >
                <option value="">Select Subcategory</option>
                {category === "Football" ? (
                  <>
                    <option value="Football Boots">Football Boots</option>
                    <option value="Football Jerseys">Football Jerseys</option>
                    <option value="Shin Guards">Shin Guards</option>
                  </>
                ) : (
                  <>
                    <option value="Bats">Bats</option>
                    <option value="Balls">Balls</option>
                    <option value="Gloves">Gloves</option>
                  </>
                )}
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Description</label>
              <textarea
                name="description"
                defaultValue={description}
                required
                className="w-full bg-gray-700 text-white px-3 py-2 rounded-md"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Price ($)</label>
                <input
                  type="number"
                  name="price"
                  defaultValue={price}
                  required
                  className="w-full bg-gray-700 text-white px-3 py-2 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Rating (1-5)</label>
                <input
                  type="number"
                  name="rating"
                  defaultValue={rating}
                  min="1"
                  max="5"
                  required
                  className="w-full bg-gray-700 text-white px-3 py-2 rounded-md"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Customization</label>
              <input
                type="text"
                name="customization"
                defaultValue={customization}
                className="w-full bg-gray-700 text-white px-3 py-2 rounded-md"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Processing Time</label>
              <input
                type="text"
                name="processingTime"
                defaultValue={processingTime}
                required
                className="w-full bg-gray-700 text-white px-3 py-2 rounded-md"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Stock Status</label>
              <select
                name="stockStatus"
                defaultValue={stockStatus}
                required
                className="w-full bg-gray-700 text-white px-3 py-2 rounded-md"
              >
                <option value="">Select Status</option>
                <option value="In Stock">In Stock</option>
                <option value="Out of Stock">Out of Stock</option>
              </select>
            </div>

            <button
      type="submit"
      disabled={isLoading}
      className={`w-full mt-4 px-4 py-2 bg-yellow-400 text-gray-900 font-semibold rounded-md hover:bg-yellow-500 transition-colors duration-300 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {isLoading ? 'Updating...' : 'Update Product'}
    </button>
          </form>
        </Fade>
      </div>
    </section>
  );
};

export default UpdateEquipmentPage;