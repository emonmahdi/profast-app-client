import React from "react";
import { Link, Outlet } from "react-router";
import ProFastLogo from "../Components/ui/ProfastLogo";
import { HiOutlineViewGrid } from "react-icons/hi";
import {
  FaBoxOpen,
  FaMoneyCheckAlt,
  FaMapMarkedAlt,
  FaUserEdit,
  FaMotorcycle,
  FaUserClock,
} from "react-icons/fa";

const DashboardLayout = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="navbar bg-base-300 w-full lg:hidden">
          <div className="flex-none">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="mx-2 flex-1 px-2">Dashboard</div>
        </div>

        {/* Page content here */}
        <div className="p-8">
          <Outlet />
        </div>
      </div>

      {/* Sidebar */}
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 min-h-full w-80 p-4 text-base">
          {/* Logo */}
          <div className="mb-6">
            <ProFastLogo />
          </div>

          {/* Menu Items */}
          <li>
            <Link to="/dashboard" className="flex items-center gap-2">
              <HiOutlineViewGrid /> Dashboard
            </Link>
          </li>
          <li>
            <Link to="/dashboard/myParcels" className="flex items-center gap-2">
              <FaBoxOpen /> My Parcels
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/paymentHistory"
              className="flex items-center gap-2"
            >
              <FaMoneyCheckAlt /> Payment History
            </Link>
          </li>
          <li>
            <Link to="/dashboard/track" className="flex items-center gap-2">
              <FaMapMarkedAlt /> Track a Package
            </Link>
          </li>
          <li>
            <Link to="/dashboard/profile" className="flex items-center gap-2">
              <FaUserEdit /> Update Profile
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/activeRiders"
              className="flex items-center gap-2"
            >
              <FaMotorcycle /> Active Riders
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/pendingRiders"
              className="flex items-center gap-2"
            >
              <FaUserClock /> Pending Riders
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
