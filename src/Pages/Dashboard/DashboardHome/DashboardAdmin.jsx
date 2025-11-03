import React from "react";
import { useAuth } from "../../../hooks/useAuth";
import { FaEnvelope, FaUserCircle } from "react-icons/fa";

const DashboardAdmin = () => {
  const { user } = useAuth();
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Dashboard Header */}
      <header className="bg-white shadow-md p-2 flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-800">
          Admin Dashboard
        </h1>
        <p className="text-gray-500 text-sm">
          Welcome,{" "}
          <span className="font-medium text-gray-700">
            {user?.displayName || "Guest"}
          </span>
        </p>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center p-6">
        <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg">
          <div className="flex flex-col items-center">
            {/* Avatar */}
            <FaUserCircle className="text-gray-400 text-8xl mb-4" />

            {/* User Info */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-1">
              {user?.displayName || "Guest User"}
            </h2>
            <div className="flex items-center gap-2 text-gray-600 mb-4">
              <FaEnvelope className="text-gray-500" />
              <p>{user?.email || "No email available"}</p>
            </div>

            {/* Divider */}
            <div className="w-full border-t border-gray-200 my-4"></div>

            {/* Account Info */}
            <div className="text-center space-y-2">
              <p className="text-sm text-gray-500">
                <span className="font-medium text-gray-700">Role:</span> User
              </p>
              <p className="text-sm text-gray-500">
                <span className="font-medium text-gray-700">Joined:</span>{" "}
                {new Date().toLocaleDateString()}
              </p>
            </div>

            {/* Edit Profile Button */}
            <button className="mt-6 px-5 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
              Edit Profile
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white text-center text-gray-400 text-sm py-4 border-t">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </footer>
    </div>
  );
};

export default DashboardAdmin;
