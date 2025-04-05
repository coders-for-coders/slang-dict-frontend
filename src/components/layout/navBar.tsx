"use client";
import React, { useState } from "react";
import { FiSearch, FiPlus, FiLogIn, FiLogOut } from "react-icons/fi";
import { useSession, signIn, signOut } from "next-auth/react"; // Import session utilities
import LoginModal from "../auth/login";

const NavBar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const { data: session } = useSession(); // Get session data

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  return (
    <>
      <nav className="shadow-md px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex-1 flex items-center">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-amber-400 text-transparent bg-clip-text mb-4">
              Slang Dictionary
            </h1>
          </div>

          {/* Search Bar */}
          <div className="flex-1 flex items-center">
            <div className="relative flex items-center">
              <FiSearch className="absolute left-3 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearch}
                className="pl-10 pr-4 py-2 border border-amber-50/10 rounded-lg focus:outline-none w-64"
              />
            </div>
          </div>

          {/* Authentication and Add Buttons */}
          <div className="flex items-center gap-2">
            {/* Login/Logout Button */}
            {session ? (
              <button
                className="flex items-center gap-2 cursor-pointer bg-red-900/30 text-white px-4 py-2 rounded-lg transition-colors"
                onClick={() => signOut()}
              >
                <FiLogOut />
                Logout
              </button>
            ) : (
              <button
                className="flex items-center gap-2 cursor-pointer bg-emerald-900/30 text-white px-4 py-2 rounded-lg transition-colors"
                onClick={openLoginModal}
              >
                <FiLogIn />
                Login
              </button>
            )}

            {/* Add Button */}
            <button
              className={`flex items-center gap-2 cursor-pointer ${
                session
                  ? "bg-emerald-900/30 text-white"
                  : "bg-gray-700/30 text-gray-500 cursor-not-allowed"
              } px-4 py-2 rounded-lg transition-colors`}
              onClick={session ? () => alert("Add functionality here") : undefined} // Replace with actual add logic
              disabled={!session}
            >
              <FiPlus />
              Add
            </button>
          </div>
        </div>
      </nav>

      {/* Login Modal */}
      <LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal} />
    </>
  );
};

export default NavBar;