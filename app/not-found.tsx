import Image from "next/image";

import notFound from "@/public/not-found.jpg";

export const metadata = {
  title: "Page Not Found",
  description: "The page you are looking for could not be found.",
};

function NotFound() {
  return (
    <section className="relative mt-20 flex h-[80vh] w-full items-center overflow-hidden">
      <Image
        src={notFound}
        fill
        alt="A background image indicating a page not found error"
        placeholder="blur"
        className="absolute left-0 top-0 z-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/75"></div>

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center justify-center text-balance px-2 text-center text-white md:px-5">
        <h1 className="text-balance font-pollerone text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
          This page could not be found
        </h1>
      </div>
    </section>
  );
}

export default NotFound;
