import React from 'react'
import logoImg from  '../../assets/logo.png'
import { Link } from "react-router";

const ProFastLogo = () => {
  return (
    <>
      <Link to="/">
        <div className="flex items-end">
          <img src={logoImg} alt="logo text" />
          <span className="-ml-3 text-2xl font-extrabold">Profast</span>
        </div>
      </Link>
    </>
  );
};

export default ProFastLogo