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
    <ul className="flex grow flex-col gap-5 md:flex-row md:justify-start md:gap-6">
      {navLinks.map((link) => (
        <li key={link.label}>
          <Link
            href={link.href}
            className={`${
              pathname === link.href ? "font-bold text-red-400" : ""
            } focus text-sm leading-relaxed sm:text-base lg:text-lg`}
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
