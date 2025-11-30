import Image from "next/image";
import ButtonLink from "./_components/ButtonLink";

import TimeIcon from "@/public/icons/time.svg";
import SmileIcon from "@/public/icons/smile.svg";
import PawEmptyIcon from "@/public/icons/paw-empty.svg";

import cat from "@/public/cat.jpg";

const Section = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => <section className={className}>{children}</section>;

const StatItem = ({
  icon: Icon,
  value,
  label,
}: {
  icon: React.ElementType;
  value: string;
  label: string;
}) => (
  <li className="flex flex-col justify-center gap-1 text-center">
    <Icon className="h-12 w-auto" />
    <span className="font-bold text-red-400">{value}</span>
    <span className="font-semibold">{label}</span>
  </li>
);

const ServiceCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div className="rounded-3xl bg-gradient-to-br from-red-100 to-yellow-100 px-3 py-5 text-center shadow-lg">
    <h3 className="my-3 text-base font-bold md:text-lg lg:text-xl">{title}</h3>
    <p className="text-balance">{description}</p>
  </div>
);

export default function Home() {
  return (
    <>
      <Section className="wave-1 relative before:absolute before:left-0 before:top-0 before:h-full before:w-full before:bg-gradient-to-br before:from-orange-100 before:via-red-100 before:to-yellow-100 before:content-['']">
        <div className="wave-2 relative mt-20 flex h-[80vh] w-full items-center overflow-hidden">
          <video
            className="absolute left-0 top-0 h-full w-full object-cover"
            src="/bg-video.mp4"
            autoPlay
            loop
            muted
            playsInline
          />

          <div className="absolute inset-0 bg-black/80"></div>

          <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center justify-center text-balance px-2 text-center md:px-5">
            <h1 className="font-h1 text-balance text-gray-50">
              Pamper Your Pet with Love & Care
            </h1>

            <p className="my-8 text-gray-50 md:my-10">
              From soothing baths and breed-specific cuts to skin and coat
              treatments, we combine expert techniques with genuine care to
              bring out your pet&apos;s natural beauty and confidence.
            </p>

            <ButtonLink href="/contact" customStyles="max-lg:order-0">
              Book now
            </ButtonLink>
          </div>
        </div>
      </Section>

      <Section className="container-wide px-5 py-10 md:py-32">
        <p className="w-fit rounded-full bg-gradient-to-br from-red-100 to-yellow-100 px-2 py-1 shadow-md md:px-4">
          About us
        </p>

        <div className="grid grid-cols-1 items-center gap-12 pt-10 md:grid-cols-2 md:gap-20 md:pt-20">
          <div className="relative order-2 h-64 w-full md:order-1 md:h-full">
            <Image
              src={cat}
              fill
              alt="Hero Image"
              placeholder="blur"
              className="absolute inset-0 h-full w-full rounded-full object-cover object-center"
            />
          </div>

          <div className="order-1 md:order-2">
            <h2 className="font-h2 mt-6 text-balance md:mt-0">
              Caring for Pets, One Fluff at a Time
            </h2>

            <p className="py-8">
              At Fluffy and Bluffy, we believe every pet deserves to look and
              feel their best. Our professional groomers provide gentle,
              high-quality grooming services in a warm and friendly environment.
              From stylish cuts to soothing baths, we make sure every visit
              leaves your furry friend happy, healthy, and looking adorable.
            </p>

            <ul className="flex gap-10 pb-8 md:pb-8">
              <StatItem icon={TimeIcon} value="3-5 min" label="Check-In Time" />
              <StatItem icon={SmileIcon} value="98%" label="Happy Clients" />
              <StatItem
                icon={PawEmptyIcon}
                value="500+"
                label="Pets Cared For"
              />
            </ul>

            <ButtonLink href="/about" customStyles="max-lg:order-0">
              Learn more
            </ButtonLink>
          </div>
        </div>
      </Section>

      <Section className="container-wide px-5 py-10 md:py-32">
        <p className="w-fit rounded-full bg-gradient-to-br from-red-100 to-yellow-100 px-2 py-1 shadow-md md:px-4">
          Our services
        </p>

        <div className="grid grid-cols-1 items-center gap-12 pt-10 md:grid-cols-2 md:gap-20 md:pt-20">
          <div>
            <h2 className="font-h2 mt-6 text-balance md:mt-0">
              Tailored Care for Every Paw
            </h2>

            <p className="py-8">
              From stylish haircuts and gentle baths to nail trims and ear
              cleaning, Fluffy and Bluffy provides everything your furry friend
              needs to look and feel their best. Our experienced groomers ensure
              a safe, comfortable, and loving experience for every pet.
            </p>

            <ButtonLink href="/services" customStyles="max-lg:order-0">
              See all services
            </ButtonLink>
          </div>

          <div className="mx-auto grid w-fit grid-cols-2 grid-rows-2 justify-center gap-3 md:my-0 md:gap-5 lg:gap-8">
            <ServiceCard
              title="Bath & Dry"
              description="A gentle wash and blow-dry to keep your furry friend clean, soft, and fresh."
            />
            <ServiceCard
              title="Haircut & Styling"
              description="Custom cuts and stylish trims to match your pet's personality and coat."
            />
            <ServiceCard
              title="Nail & Ear"
              description="Gentle nail clipping and ear cleaning for a healthy, happy visit."
            />
            <ServiceCard
              title="Full Service"
              description="The ultimate spa package with complete grooming, styling, and care."
            />
          </div>
        </div>
      </Section>
    </>
  );
}
