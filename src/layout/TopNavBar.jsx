import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import logo from "../assets/logo.jpg";
import { useNavigate, Link, NavLink } from "react-router-dom";

const TopNavBar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const navItems = [
    { to: "/", label: "Home" },
    {
      to: "/services",
      label: "Services",
      dropdown: [
        { to: "/services/grooming", label: "Grooming" },
        { to: "/services/training", label: "Training" },
        { to: "/services/veterinary", label: "Veterinary" },
      ],
    },
    { to: "/about", label: "About Us" },
    { to: "/contact", label: "Contact Us" },
  ];

  return (
    <>
      <div className="bg-peach/20 flex items-center justify-between p-4 shadow-md relative z-50">
        <img
          src={logo}
          alt="Logo"
          className="h-16 w-16 rounded-full object-cover cursor-pointer"
          onClick={() => navigate("/")}
        />

        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <ul className="flex space-x-4 relative">
            {navItems.map(({ to, label, dropdown }) => (
              <li key={to} className="relative group">
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    `relative px-2 py-1 rounded-xl font-bold text-lg text-saddle-brown transition duration-300 ${
                      isActive
                        ? "after:w-full after:opacity-100"
                        : "after:w-0 after:opacity-0"
                    } after:absolute after:left-0 after:-bottom-1 after:h-1 after:bg-saddle-brown after:transition-all after:duration-300 after:rounded-xl`
                  }
                >
                  {label}
                </NavLink>

                {dropdown && (
                  <ul className="absolute left-0 top-full mt-1 w-48 bg-white shadow-lg rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    {dropdown.map(({ to, label }) => (
                      <li key={to}>
                        <NavLink
                          to={to}
                          className="block px-4 py-2 text-saddle-brown hover:bg-gray-100 rounded-md transition"
                        >
                          {label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Book Now Button */}
        <div className="hidden md:flex items-center">
          <Link
            to="/booking"
            className="text-saddle-brown p-2 rounded-xl border hover:bg-saddle-brown hover:text-white"
          >
            <span className="font-bold text-lg">Book Now</span>
          </Link>
        </div>

        {/* Hamburger Icon */}
        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden text-saddle-brown"
        >
          <GiHamburgerMenu size={25} />
        </button>
      </div>

      {/* Mobile Sidebar Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Sidebar Panel */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } shadow-lg p-4`}
      >
        <div className="flex justify-between items-center mb-4 space-x-4">
          <img
            src={logo}
            alt="Logo"
            className="h-12 w-12 rounded-full object-cover"
          />
          <h1 className=" flex-1 text-xl font-bold text-saddle-brown">
            Puppy <br /> Factory
          </h1>
          <button className="flex" onClick={() => setMenuOpen(false)}>
            <IoClose size={25} />
          </button>
        </div>

        {navItems.map(({ to, label, dropdown }) => (
          <div key={to} className="mb-3">
            {dropdown ? (
              <>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="w-full text-left font-bold text-saddle-brown py-2"
                >
                  {label}
                </button>
                {servicesOpen && (
                  <ul className="pl-4 space-y-1">
                    {dropdown.map(({ to, label }) => (
                      <li key={to}>
                        <NavLink
                          to={to}
                          onClick={() => setMenuOpen(false)}
                          className="block py-1 text-saddle-brown hover:underline"
                        >
                          {label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            ) : (
              <NavLink
                to={to}
                onClick={() => setMenuOpen(false)}
                className="block py-2 font-bold text-saddle-brown"
              >
                {label}
              </NavLink>
            )}
          </div>
        ))}

        <Link
          to="/booking"
          onClick={() => setMenuOpen(false)}
          className="mt-4 block text-center text-white bg-saddle-brown p-2 rounded-xl"
        >
          Book Now
        </Link>
      </div>
    </>
  );
};

export default TopNavBar;
