import Link from "next/link";
import Image from "next/image";

function Logo() {
  return (
    <Link href="/" className="focus relative">
      <Image
        src="icons/logo.svg"
        width={60}
        height={30}
        quality={100}
        alt="Fluffy and Bluffy Logo"
      />
    </Link>
  );
}

export default Logo;
