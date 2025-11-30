import Link from "next/link";

import PawIcon from "@/public/icons/paw.svg";

type ButtonLinkType = "primary" | "secondary";

interface ButtonLinkProps {
  children: React.ReactNode;
  href: string;
  type?: ButtonLinkType;
  customStyles?: string;
  onClick?: () => void;
}

const buttonBase =
  "flex h-10 min-w-fit items-center justify-center rounded-full px-5 transition-transform duration-200 ease-in-out";

const buttonStyles: Record<ButtonLinkType, string> = {
  primary:
    "relative px-5 before:absolute before:left-0 before:top-1/2 before:h-12 before:w-12 before:-translate-y-1/2 before:rounded-full before:bg-gradient-to-br before:from-red-200 before:to-yellow-200 before:shadow-md before:transition-all before:duration-200 before:ease-linear before:content-[''] hover:before:h-12 hover:before:w-[100%] focus:before:h-12 focus:before:w-[100%] focus-visible:outline-none",
  secondary: "focus",
};

function ButtonLink({
  children,
  href,
  type = "primary",
  customStyles,
  onClick,
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`${buttonBase} ${buttonStyles[type]} ${customStyles}`}
      onClick={onClick}
    >
      <span className="z-12 relative flex items-center justify-center gap-2">
        {children}
        <PawIcon className="inline h-5 w-5" />
      </span>
    </Link>
  );
}

export default ButtonLink;
