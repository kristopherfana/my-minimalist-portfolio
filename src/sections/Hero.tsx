import Button from "@/components/button";
import { FC } from "react";
import Image from "next/image";
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import heroImage from "@/assets/images/hero-image.jpeg";

const Hero: FC = () => {
  return (
    <section className="md:h-screen">
      <div className="grid md:grid-cols-12 md:h-full">
        {/* Headline and buttons */}
        <div className="md:col-span-7 flex flex-col justify-center !max-h-screen">
          <div className="flex flex-col gap-10 container !max-w-full mt-40">
            <h1 className="text-5xl md:text-6xl lg:text-7xl md:mt-0">
              Crafting digital experiences through code and creative design.
            </h1>
            <div className="flex flex-col gap-4 items-start md:flex-row md:items-center">
              <Button
                variant="secondary"
                iconAfter={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
                    />
                  </svg>
                }
              >
                <span>View my work</span>
              </Button>
              <Button variant="text">Let&apos;s talks</Button>
            </div>
          </div>
        </div>
        {/* Image */}
        <div className="md:col-span-5 md:h-full">
          <div className="mt-20 md:mt-0 md:h-full md:max-h-screen">
            <Image
              src={heroImage}
              alt="A King's portrait"
              className="size-full object-cover"
            ></Image>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
