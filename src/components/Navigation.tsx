
import React, { useState } from "react";
import { Home, Music, Smile, KeyRound, Menu, X } from "lucide-react";
import { NavLink as RouterNavLink } from "react-router-dom";

// Navigation component
const Navigation = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <>
      <nav className="p-6 flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center gap-8">
          {/* Logo */}
          <RouterNavLink to="/" className="text-2xl font-bold text-gray-700">
            MoodMixer
          </RouterNavLink>
        </div>

        {/* Mobile Hamburger Menu Icon */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={toggleSidebar}
            className="text-gray-700 focus:outline-none"
          >
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex gap-6">
          <NavLink icon={<Home size={18} />} text="Home" to="/" />
          <NavLink
            icon={<Music size={18} />}
            text="Mood Player"
            to="/mood-player"
          />
          <NavLink
            icon={<Smile size={18} />}
            text="Meme Generator"
            to="/meme-generator"
          />
          <NavLink
            icon={<KeyRound size={18} />}
            text="Escape Room"
            to="/escape-room"
          />
        </div>

        {/* Desktop Sign Up/Login Buttons */}
        <div className="flex gap-4">
          <RouterNavLink
            to="/login"
            className="px-6 py-2 rounded-lg bg-gray-100 shadow-neumorph active:shadow-neumorph-inset transition-all"
          >
            Login
          </RouterNavLink>
          <RouterNavLink
            to="/signup"
            className="px-6 py-2 rounded-lg bg-indigo-500 text-white shadow-neumorph-colored active:shadow-neumorph-inset-colored transition-all"
          >
            Sign Up
          </RouterNavLink>
        </div>
      </nav>

      {/* Sidebar for Mobile */}
      <div
        className={`md:hidden fixed inset-0 bg-gray-800 bg-opacity-50 z-50 transition-all duration-300 ${
          isSidebarOpen ? "block" : "hidden"
        }`}
        onClick={toggleSidebar}
      >
        <div
          className={`fixed top-0 left-0 w-2/4 h-full bg-white shadow-lg transition-transform duration-300 ease-in-out ${
            isSidebarOpen ? "transform-none" : "-translate-x-full"
          }`}
        >
          <div className="p-6">
            <RouterNavLink
              to="/"
              className="flex items-center gap-2 text-gray-600 mb-4"
            >
              <Home size={18} />
              <span>Home</span>
            </RouterNavLink>
            <RouterNavLink
              to="/mood-player"
              className="flex items-center gap-2 text-gray-600 mb-4"
            >
              <Music size={18} />
              <span>Mood Player</span>
            </RouterNavLink>
            <RouterNavLink
              to="/meme-generator"
              className="flex items-center gap-2 text-gray-600 mb-4"
            >
              <Smile size={18} />
              <span>Meme Generator</span>
            </RouterNavLink>
            <RouterNavLink
              to="/escape-room"
              className="flex items-center gap-2 text-gray-600 mb-4"
            >
              <KeyRound size={18} />
              <span>Escape Room</span>
            </RouterNavLink>
          </div>
        </div>
      </div>
    </>
  );
};

// NavLink Component to handle individual links
const NavLink = ({
  icon,
  text,
  to,
}: {
  icon: React.ReactNode;
  text: string;
  to: string;
}) => (
  <RouterNavLink
    to={to}
    className={({ isActive }) =>
      `flex items-center gap-2 text-gray-600 ${
        isActive ? "text-gray-900 font-semibold" : ""
      }`
    }
  >
    {icon}
    <span>{text}</span>
  </RouterNavLink>
);

export default Navigation;
