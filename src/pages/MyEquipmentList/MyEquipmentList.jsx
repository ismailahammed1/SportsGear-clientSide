import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";

const MyEquipmentList = () => {
  const { user } = useContext(AuthContext);
  const [equipment, setEquipment] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/equipment?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setEquipment(data); 
        })
        .catch((err) => {
          console.error("Error fetching user equipment:", err);
        });
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
          });
      }
    });
  };
    
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4 text-center">My Equipment List</h1>
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
    </div>
  );
};

export default MyEquipmentList;
