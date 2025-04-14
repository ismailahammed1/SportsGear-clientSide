import React, { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const AllEquipmentPage = () => {
  const [equipment, setEquipment] = useState([]);
  const [deleteId, setDeleteId] = useState(null); // Track item to delete
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/allequipments")
      .then((res) => res.json())
      .then((data) => setEquipment(data))
      .catch((err) => console.error("Error fetching equipment:", err));
  }, []);

  const handleRemoveItem = async () => {
    try {
      const response = await fetch(`http://localhost:5000/equipments/${deleteId}`, {
        method: "DELETE",
      });
      if (response.ok) {
        alert("Item deleted successfully!");
        setEquipment(equipment.filter((item) => item._id !== deleteId));
      } else {
        alert("Failed to delete item.");
      }
    } catch (error) {
      console.error("Error deleting item:", error);
      alert("An error occurred while deleting the item.");
    } finally {
      setShowModal(false);
      setDeleteId(null);
    }
  };

  return (
    <section className="py-12 mt-20  dark:bg-gray-900 dark:text-white bg-gray-300 text-gray-100">
      <div className="container mx-auto px-6">
        <Fade direction="down">
          <h2 className="text-3xl font-bold text-yellow-400 text-center mb-8">
            All Sports Equipment
          </h2>
        </Fade>

        <Fade>
          <div className="overflow-x-auto">
            <table className="w-full bg-gray-800 rounded-lg shadow-lg">
              <thead className="bg-yellow-500 text-gray-900">
                <tr>
                  <th className="py-3 px-4 text-left">Name</th>
                  <th className="py-3 px-4 text-left">Category</th>
                  <th className="py-3 px-4 text-left">Rating</th>
                  <th className="py-3 px-4 text-left">Price ($)</th>
                  <th className="py-3 px-4 text-center">Actions</th>
                  <th className="py-3 px-4 text-center">Update</th>
                  <th className="py-3 px-4 text-center">Delete</th>
                </tr>
              </thead>
              <tbody>
                {equipment.map((item) => (
                  <tr
                    key={item._id}
                    className="border-b border-gray-700 hover:bg-gray-700 transition"
                  >
                    <td className="py-3 px-4">{item.itemName}</td>
                    <td className="py-3 px-4">{item.category}</td>
                    <td className="py-3 px-4">{item.rating}</td>
                    <td className="py-3 px-4">${item.price}</td>
                    <td className="py-3 px-4 text-center">
                      <Link
                        to={`/equipment/${item._id}`}
                        className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-md font-semibold hover:bg-yellow-500 transition"
                      >
                        View Details
                      </Link>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <Link
                        to={`/update-equipment/${item._id}`}
                        className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-md font-semibold hover:bg-yellow-500 transition"
                      >
                        Update
                      </Link>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <button
                        onClick={() => {
                          setDeleteId(item._id);
                          setShowModal(true);
                        }}
                      >
                        <RiDeleteBin6Line className="text-2xl text-red-500 hover:text-red-700" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Fade>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white text-gray-900 p-6 rounded-lg shadow-lg w-96">
              <h3 className="text-lg font-bold mb-4">Confirm Deletion</h3>
              <p>Are you sure you want to delete this item?</p>
              <div className="mt-6 flex justify-end gap-4">
                <button
                  onClick={() => {
                    setShowModal(false);
                    setDeleteId(null);
                  }}
                  className="px-4 py-2 bg-gray-400 rounded hover:bg-gray-500 text-white"
                >
                  Cancel
                </button>
                <button
                  onClick={handleRemoveItem}
                  className="px-4 py-2 bg-red-600 rounded hover:bg-red-700 text-white"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AllEquipmentPage;
