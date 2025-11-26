"use client";

import { useState } from "react";
import { useOutsideClick } from "../_hooks/useOutsideClick";
import Navigation from "./Navigation";

function HeaderMenu() {
  const [showMenu, setShowMenu] = useState(false);
  const ref = useOutsideClick(() => setShowMenu(false));

  return (
    <nav className="flex grow items-center justify-end gap-3 text-base font-medium md:text-lg">
      <a
        href="#"
        className="focus inline-flex h-10 min-w-fit items-center justify-center gap-2 rounded-full bg-gradient-to-br from-red-200 to-yellow-200 px-5 shadow-md transition-transform duration-200 ease-in-out hover:scale-105 lg:order-1"
      >
        Book now
      </a>

      <div ref={ref} className="lg:grow">
        <button
          onClick={() => setShowMenu(!showMenu)}
          type="button"
          className="focus relative z-30 h-10 w-10 lg:hidden"
          aria-controls="navbar"
          aria-label={`${showMenu ? "Close main menu" : "Open main menu"}`}
        >
          {showMenu ? "x" : "="}
        </button>

        <div className="lg:order-0 fixed left-0 top-20 z-20 flex w-full justify-center bg-gray-50 lg:static">
          <div className="flex items-center justify-between lg:justify-around lg:shadow-none">
            <div
              id="navbar"
              className={`${
                showMenu ? "flex pb-6 pt-3 lg:p-0" : "hidden"
              } w-full items-center justify-between lg:order-1 lg:flex`}
            >
              <Navigation closeMenu={setShowMenu} />
            </div>
          </div>
        </div>
      </div>
      <div
        className={`absolute right-0 top-0 -z-50 h-screen bg-slate-400/30 backdrop-blur-md lg:hidden ${showMenu ? "w-full" : "w-0"}`}
      ></div>
    </nav>
  );
}

export default HeaderMenu;
