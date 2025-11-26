import Navigation from "./Navigation";

function Footer() {
  return (
    <footer className="px-5 py-5 md:py-8">
      <div className="mx-auto flex flex-col gap-8 md:gap-3 lg:max-w-[80vw]">
        <div className="flex flex-col justify-between gap-8 rounded-t-3xl text-center sm:flex-row sm:text-left md:gap-3">
          <Navigation />

          <p className="text-sm leading-relaxed sm:text-right sm:text-base lg:text-lg">
            &copy; {new Date().getFullYear()} - Fluffy & Bluffy.{" "}
            <span className="block lg:inline">All right reserved.</span>
          </p>
        </div>

        <p className="mx-auto w-fit text-sm leading-relaxed sm:mr-0 sm:text-base lg:text-lg">
          Made with by
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
