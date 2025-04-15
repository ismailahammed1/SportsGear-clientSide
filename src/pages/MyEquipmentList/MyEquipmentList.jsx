import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

const MyEquipmentList = () => {
  const { user } = useContext(AuthContext);
  const [equipment, setEquipment] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/equipment?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setEquipment(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching user equipment:", err);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setLoading(true);
        fetch(`http://localhost:5000/equipments/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data?.result?.deletedCount > 0) {
              const updated = equipment.filter((item) => item._id !== id);
              setEquipment(updated);
              Swal.fire("Deleted!", "Your equipment has been removed.", "success");
            } else {
              Swal.fire("Failed!", "Item could not be deleted.", "error");
            }
            setLoading(false);
          })
          .catch(() => setLoading(false));
      }
    });
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!user) {
    navigate('/login');
    return null;
  }

  return (
    <div className="p-6 dark:bg-gray-700 bg-gray-400 min-h-screen">
      <h1 className="text-3xl font-bold mb-4 text-center mt-32">My Equipment List</h1>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {equipment.map((item) => (
            <div key={item._id} className="bg-gray-800 text-white p-4 rounded-lg shadow-md">
              <img src={item.image} alt={item.itemName} className="w-full h-40 object-cover rounded-md mb-2" />
              <h2 className="text-xl font-semibold">{item.itemName}</h2>
              <p>{item.description}</p>
              <p className="text-yellow-300 mt-1">Price: ${item.price}</p>
              <div className="flex justify-between mt-4">
                <Link
                  to={`/update-equipment/${item._id}`}
                  className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-md font-semibold hover:bg-yellow-500 transition"
                >
                  Update
                </Link>
                <button
                  onClick={() => handleDelete(item._id)}
                  className="px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyEquipmentList;