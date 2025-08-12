import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full h-48 md:h-64 lg:h-80 relative overflow-hidden">
      <img
        src="/top-bg.webp"
        alt="Navbar Background"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      />
      {/* Możesz dodać tutaj elementy nawigacyjne */}
    </nav>
  );
};

export default Navbar;
