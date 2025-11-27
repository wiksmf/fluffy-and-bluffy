"use client";

import { useState } from "react";

import { useOutsideClick } from "../_hooks/useOutsideClick";

import Logo from "./Logo";
import HeaderMenu from "./HeaderMenu";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const ref = useOutsideClick(() => setShowMenu(false));

  return (
    <>
      <header
        ref={ref}
        className="fixed top-0 z-30 flex h-20 w-full bg-gray-50 shadow-md"
      >
        <div className="container-wide flex w-full items-center justify-between bg-gray-50 px-5 py-3 lg:px-2 lg:py-0">
          <Logo />
          <HeaderMenu showMenu={showMenu} setShowMenu={setShowMenu} />
        </div>
      </header>

      <div
        className={`absolute right-0 top-0 z-20 h-screen bg-slate-400/30 backdrop-blur-md lg:hidden ${showMenu ? "w-full" : "w-0"}`}
      ></div>
    </>
  );
}

export default Header;
