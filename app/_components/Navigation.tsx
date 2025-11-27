"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

type NavigationProps = {
  closeMenu?: (value: boolean) => void;
};

function Navigation({ closeMenu }: NavigationProps) {
  const pathname = usePathname();

  return (
    <ul className="flex grow flex-col gap-5 md:flex-row md:justify-start md:gap-9 lg:gap-11">
      {navLinks.map((link) => (
        <li key={link.label}>
          <Link
            href={link.href}
            className={`${
              pathname === link.href ? "font-bold text-red-400" : ""
            } focus relative block w-fit cursor-pointer leading-relaxed after:absolute after:block after:h-1 after:w-full after:origin-left after:scale-x-0 after:rounded-full after:bg-gradient-to-br after:from-red-200 after:to-yellow-200 after:transition after:duration-300 after:content-[''] after:hover:scale-x-100`}
            onClick={() => closeMenu && closeMenu(false)}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Navigation;
