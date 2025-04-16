import React, { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";


const AllEquipmentPage = () => {
  const [equipment, setEquipment] = useState([]);
  const [deleteId, setDeleteId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://sportsgear-servertside-production.up.railway.app/allequipments")
      .then((res) => res.json())
      .then((data) => {
      
        
        setEquipment(data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, []);

  const handleRemoveItem = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://sportsgear-servertside-production.up.railway.app/equipments/${deleteId}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setEquipment(equipment.filter((item) => item._id !== deleteId));
        Swal.fire("Deleted!", "The item has been removed.", "success");
      } else {
        Swal.fire("Error!", "Failed to delete item.", "error");
      }
    } catch (error) {
      Swal.fire("Error!", "An error occurred while deleting the item.", "error");
    } finally {
      setShowModal(false);
      setDeleteId(null);
      setLoading(false);
    }
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <section className="py-12 mt-20 dark:bg-gray-900 dark:text-white bg-gray-300 text-gray-100 min-h-screen">
      <div className="container mx-auto px-6">
        <Fade direction="down">
          <h2 className="text-3xl font-bold text-yellow-400 text-center mb-8">
            All Sports Equipment
          </h2>
        </Fade>

        {equipment.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl mb-4">No equipment found</p>
            <Link 
              to="/add-equipment" 
              className="bg-yellow-400 text-gray-900 px-6 py-2 rounded-md font-semibold hover:bg-yellow-500 transition"
            >
              Add Equipment
            </Link>
          </div>
        ) : (
          <>
            <Fade>
              <div className="overflow-x-auto">
                <table className="w-full bg-gray-800 rounded-lg shadow-lg">
                  {/* Table content remains the same */}
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
                      disabled={loading}
                    >
                      {loading ? "Deleting..." : "Delete"}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default AllEquipmentPage;