import React from "react";
import { Link, NavLink } from "react-router";
import ProFastLogo from "../ui/ProfastLogo";
import { useAuth } from "../../hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();
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
        <a className="btn btn-ghost text-xl">
          <ProFastLogo></ProFastLogo>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <button
              onClick={handleLogout}
              className="btn me-3  bg-red-500 text-white hover:bg-amber-50 hover:text-black"
            >
              LogOut
            </button>
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
