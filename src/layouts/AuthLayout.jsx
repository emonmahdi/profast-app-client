import React from "react";
import { Outlet } from "react-router";
import ProFastLogo from "../Components/ui/ProfastLogo";
import authImg from './../assets/authImage.png'

const AuthLayout = () => {
  return (
    <div>
        <div className="px-12">
            <ProFastLogo />
        </div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={authImg}
            className="max-w-sm rounded-lg"
          />
          <div>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
