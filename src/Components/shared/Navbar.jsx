import React from "react";
import { Link, NavLink } from "react-router";
import ProFastLogo from "../ui/ProfastLogo";
import { useAuth } from "../../hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();
  console.log("User all data", user);
  const navItems = (
    <>
      <NavLink to={`/`} className={"me-3"}>
        Home
      </NavLink>
      <NavLink to={`/sendParcel`} className={"me-3"}>
        Send A Parcel
      </NavLink>
      <NavLink to={`/coverage`} className={"me-3"}>
        Coverage
      </NavLink>
      <NavLink to={`/about`} className={"me-3"}>
        About
      </NavLink>
      <NavLink to={`/beARider`} className={"me-3"}>
        Be A Rider
      </NavLink>
      {user && <NavLink to="/dashboard">Dashboard</NavLink>}
    </>
  );

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navItems}
          </ul>
        </div>
        <span className="btn btn-ghost text-xl">
          <ProFastLogo></ProFastLogo>
        </span>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <div className="flex items-center gap-4 bg-white px-4 py-2 rounded-xl shadow-sm border border-gray-200">
              <span className="text-gray-700 font-semibold text-lg flex items-center gap-2">
                <img
                  src={
                    user?.photoURL ||
                    "https://i.ibb.co/8z3ZxwL/default-avatar.png"
                  }
                  alt="User Avatar"
                  className="w-8 h-8 rounded-full border border-gray-300"
                />
                {user?.displayName || "User"}
              </span>
              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-red-500 to-red-600 text-white font-medium hover:from-red-600 hover:to-red-700 transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Log Out
              </button>
            </div>
          </>
        ) : (
          <>
            <Link to="/login" className="me-3">
              <a className="btn">Login</a>
            </Link>
            <Link to="/register">
              <a className="btn">Register</a>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
