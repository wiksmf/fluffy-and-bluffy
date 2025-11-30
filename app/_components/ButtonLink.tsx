import Link from "next/link";

import PawIcon from "@/public/icons/paw.svg";

type ButtonLinkType = "nav" | "primary";

interface ButtonLinkProps {
  children: React.ReactNode;
  href: string;
  type?: ButtonLinkType;
  customStyles?: string;
  onClick?: () => void;
}

const buttonBase =
  "relative px-5 flex h-10 min-w-fit items-center justify-center rounded-full px-5 transition duration-200 ease-in-out";

const buttonStyles: Record<ButtonLinkType, string> = {
  nav: `before:absolute before:left-0 before:top-1/2 before:h-12 before:w-12 before:-translate-y-1/2 before:rounded-full before:bg-gradient-to-br before:from-red-200 before:to-yellow-200 before:shadow-md before:transition-all before:duration-200 before:ease-linear before:content-[''] hover:before:h-12 hover:before:w-[100%] focus:before:h-12 focus:before:w-[100% focus-visible:outline-none`,
  primary: `focus group inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-red-200 to-yellow-200 shadow-md`,
};

const ButtonContent = ({ children }: { children: React.ReactNode }) => (
  <span className="z-12 relative flex items-center justify-center gap-2">
    {children}
    <PawIcon className="inline h-5 w-5" />
  </span>
);

const ButtonPrimary = ({ children }: { children: React.ReactNode }) => (
  <>
    <span className="absolute bottom-0 right-0 mb-32 mr-4 block h-64 w-64 origin-bottom-left translate-x-24 rotate-45 rounded-full bg-orange-200/80 transition duration-300 group-hover:rotate-90"></span>
    <ButtonContent>{children}</ButtonContent>
  </>
);

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
      {type === "nav" ? (
        <ButtonContent>{children}</ButtonContent>
      ) : (
        <ButtonPrimary>{children}</ButtonPrimary>
      )}
    </Link>
  );
}

export default ButtonLink;
