import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between">
      <h1 className="text-2xl font-bold">MyBooking</h1>
      <div>
        <button className="bg-white text-blue-600 px-4 py-2 rounded mr-2">登入</button>
        <button className="bg-white text-blue-600 px-4 py-2 rounded">註冊</button>
      </div>
    </nav>
  );
};

export default Navbar;
