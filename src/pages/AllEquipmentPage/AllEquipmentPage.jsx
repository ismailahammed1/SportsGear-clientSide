import React, { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const AllEquipmentPage = () => {
  const [equipment, setEquipment] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allequipments") 
      .then((res) => res.json())
      .then((data) => setEquipment(data))
      .catch((err) => console.error("Error fetching equipment:", err));
  }, []);

  return (
    <section className="py-12 bg-gray-900 text-white">
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
                  <th className="py-3 px-4 text-left">Rating </th>
                  <th className="py-3 px-4 text-left">Price ($)</th>
                  <th className="py-3 px-4 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {equipment.map((item) => (
                  <tr key={item._id} className="border-b border-gray-700 hover:bg-gray-700 transition">
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
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default AllEquipmentPage;
