import React from "react";

const Navbar = () => {
  return (
    <nav
      className="navbar h-16 flex items-center justify-center "
      style={{
        width: "100%",
        backgroundImage: "url('backgroung-simple.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="text-4xl font-bold text-white">Uranium Counter</h1>
    </nav>
  );
};

export default Navbar;