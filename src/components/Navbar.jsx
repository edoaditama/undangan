import { motion } from "framer-motion";

import React from "react";

function Navbar() {
  return (
    <nav className=" fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-max px-6 py-4 text-white font-serif">
      <ul className="flex gap-4 tracking-wide md:tracking-wider text-lg md:text-xl">
        <li>
          <a
            href="#"
            className="bg-amber-600 hover:bg-amber-700 mt-4 px-4 py-2 tracking-widest rounded-4xl transition-all "
          >
            Home
          </a>
          <a
            href="#"
            className="bg-amber-600 hover:bg-amber-700 mt-4 px-4 py-2 tracking-widest rounded-4xl transition-all "
          >
            Greeting
          </a>
          <a
            href="#"
            className="bg-amber-600 hover:bg-amber-700 mt-4 px-4 py-2 tracking-widest rounded-4xl transition-all "
          >
            Event
          </a>
          <a
            href="#"
            className="bg-amber-600 hover:bg-amber-700 mt-4 px-4 py-2 tracking-widest rounded-4xl transition-all "
          >
            Maps
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
