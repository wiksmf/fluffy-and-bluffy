import Navigation from "./Navigation";

import HeartIcon from "@/public/icons/heart.svg";

const CURRENT_YEAR = new Date().getFullYear();

function Footer() {
  return (
    <footer className="relative z-30 bg-gray-50 px-5 py-5 md:py-8">
      <div className="container-wide flex flex-col gap-8 md:gap-3">
        <div className="flex flex-col items-center gap-8 rounded-t-3xl text-center sm:flex-row sm:items-start sm:text-left md:justify-between md:gap-3">
          <Navigation />

          <p className="sm:text-right">
            &copy; {CURRENT_YEAR} - Fluffy & Bluffy.{" "}
            <span className="block lg:inline">All right reserved.</span>
          </p>
        </div>

        <p className="mx-auto flex w-fit items-center gap-1 sm:mr-0">
          Made with
          <HeartIcon className="h-5 w-5" />
          by
          <a
            href="mailto:weronikaflacht@gmail.com"
            className="focus font-semibold"
          >
            W.
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
