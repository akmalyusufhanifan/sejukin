"use client";

import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { useState, useEffect } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    setShowNav(true);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full flex justify-between items-center bg-white h-16 px-8 lg:px-40 z-50
  transform transition-all duration-1500 ease-[cubic-bezier(0.22,1,0.36,1)]
  ${
    showNav
      ? "translate-y-0 opacity-100 shadow"
      : "-translate-y-6 opacity-0 shadow-none"
  }`}
      >
        {/* logo */}
        <div className="text-3xl text-black">Sejuk.In</div>

        {/* hamburger - mobile */}
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden hover:cursor-pointer hover:opacity-50"
        >
          <RxHamburgerMenu className="text-3xl text-black" />
        </button>

        {/* navigation - desktop */}
        <div className="hidden md:flex justify-between items-center w-125 text-black text-xl">
          <a href="#" className="hover:opacity-50">
            Home
          </a>
          <a href="#" className="hover:opacity-50">
            About Us
          </a>
          <a href="#" className="hover:opacity-50">
            Service
          </a>
          <a href="#" className="hover:opacity-50">
            Gallery
          </a>
          <a href="#" className="hover:opacity-50">
            Contact
          </a>
        </div>
      </nav>

      {/* overlay */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-black/5 backdrop-blur-xs z-60 md:hidden transition-opacity ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* navigation slide */}
      <div
        className={`fixed top-0 right-0 h-full w-64 md:hidden bg-white shadow-xl z-65 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end pt-4 pr-6">
          <button
            onClick={() => setIsOpen(false)}
            className="md:hidden hover:cursor-pointer hover:opacity-50"
          >
            <IoMdClose className="text-4xl text-black" />
          </button>
        </div>

        <ul className="pl-6 pt-4 text-xl text-black space-y-4">
          <li className="hover:opacity-50 hover:cursor-pointer">
            <a href="#">Home</a>
          </li>
          <li className="hover:opacity-50 hover:cursor-pointer">
            <a href="#">About Us</a>
          </li>
          <li className="hover:opacity-50 hover:cursor-pointer">
            <a href="#">Service</a>
          </li>
          <li className="hover:opacity-50 hover:cursor-pointer">
            <a href="#">Gallery</a>
          </li>
          <li className="hover:opacity-50 hover:cursor-pointer">
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
}
