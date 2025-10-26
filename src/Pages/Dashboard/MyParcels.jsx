import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useAuth } from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const MyParcels = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {
    data: parcels = [], // ✅ default empty array to avoid crash
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["my-parcels", user?.email],
    enabled: !!user?.email, // ✅ wait until user email exists
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels?email=${user.email}`);
      return res.data;
    },
  });

  // ✅ loading state
  if (isLoading) return <p>Loading parcels...</p>;

  // ✅ error state
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2 className="text-xl font-bold">My Parcels</h2>
      <p>Total parcels: {parcels.length}</p>
      <div className="overflow-x-auto mt-4">
        <table className="table-auto w-full border-collapse rounded-lg overflow-hidden shadow-lg">
          <thead className="bg-gray-900 text-white">
            <tr>
              <th className="px-4 py-2 text-left">Type</th>
              <th className="px-4 py-2 text-left">Created At</th>
              <th className="px-4 py-2 text-left">Cost</th>
              <th className="px-4 py-2 text-left">Payment</th>
              <th className="px-4 py-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {parcels.map((parcel) => (
              <tr key={parcel._id} className="border-b hover:bg-gray-100">
                <td className="px-4 py-2">{parcel.type}</td>
                <td className="px-4 py-2">
                  {new Date(parcel.creation_date).toLocaleDateString()}
                </td>
                <td className="px-4 py-2">৳ {parcel.cost}</td>
                <td className="px-4 py-2">
                  <span
                    className={`px-2 py-1 rounded text-white text-sm ${
                      parcel.payment_status === "paid"
                        ? "bg-green-500"
                        : "bg-red-500"
                    }`}
                  >
                    {parcel.payment_status}
                  </span>
                </td>
                <td className="px-4 py-2 flex justify-center gap-2">
                  <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
                    View
                  </button>
                  <button className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600">
                    Pay
                  </button>
                  <button className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyParcels;
