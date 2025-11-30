import Image from "next/image";

import underConstruction from "@/public/under-construction.jpg";

type UnderConstructionProps = {
  message?: string;
};

const DEFAULT_MESSAGE =
  "We're working hard to bring this page to life. Please check back soon!";

export default function UnderConstruction({
  message = DEFAULT_MESSAGE,
}: UnderConstructionProps) {
  return (
    <section className="relative mt-20 flex h-[80vh] w-full items-center overflow-hidden">
      <Image
        src={underConstruction}
        fill
        alt="Page under construction background image"
        placeholder="blur"
        className="absolute left-0 top-0 z-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/75"></div>

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center justify-center text-balance px-2 text-center text-gray-50 md:px-5">
        <h1 className="text-balance font-pollerone text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
          Page Under Construction
        </h1>

        <p className="my-8 text-base leading-relaxed md:my-10 md:text-lg lg:text-xl">
          {message}
        </p>
      </div>
    </section>
  );
}
