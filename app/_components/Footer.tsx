import Navigation from "./Navigation";

import HeartIcon from "@/public/icons/heart.svg";

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer className="px-5 py-5 md:py-8">
      <div className="container-wide flex flex-col gap-8 md:gap-3">
        <div className="flex flex-col justify-between gap-8 rounded-t-3xl text-center sm:flex-row sm:text-left md:gap-3">
          <Navigation />

          <p className="sm:text-right">
            &copy; {currentYear} - Fluffy & Bluffy.{" "}
            <span className="block lg:inline">All right reserved.</span>
          </p>
        </div>

        <p className="mx-auto flex w-fit items-center gap-1 sm:mr-0">
          Made with
          <HeartIcon className="inline h-5 w-5" />
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
