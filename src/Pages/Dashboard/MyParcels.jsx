import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useAuth } from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const MyParcels = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  // const queryClient = useQueryClient();

  const {
    data: parcels = [], // ✅ default empty array to avoid crash
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["my-parcels", user?.email],
    enabled: !!user?.email, // ✅ wait until user email exists
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels?email=${user.email}`);
      return res.data;
    },
  });

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This parcel will be deleted permanently!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await axiosSecure.delete(`/parcels/${id}`);

          if (res.data?.deletedCount > 0 || res.status === 200) {
            Swal.fire("Deleted!", "Your parcel has been deleted.", "success");
            // queryClient.invalidateQueries(["my-parcels"]); // Refresh list
            refetch();
          }
        } catch (error) {
          Swal.fire("Failed!", "Error deleting parcel.", "error", error);
        }
      }
    });
  };

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
              <th className="px-4 py-2 text-left">#</th>
              <th className="px-4 py-2 text-left">Title</th>
              <th className="px-4 py-2 text-left">Type</th>
              <th className="px-4 py-2 text-left">Created At</th>
              <th className="px-4 py-2 text-left">Cost</th>
              <th className="px-4 py-2 text-left">Payment</th>
              <th className="px-4 py-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {parcels.map((parcel, index) => (
              <tr key={parcel._id} className="border-b hover:bg-gray-100">
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{parcel.title}</td>
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
                  <button
                    onClick={() => handleDelete(parcel._id)}
                    className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                  >
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
