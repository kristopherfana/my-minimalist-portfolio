import Button from "@/components/button";
import { FC } from "react";

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const navigationLinks = [
  {
    name: "Home",
    link: "#home",
  },
  {
    name: "Projects",
    link: "#projects",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
  {
    name: "FAQS",
    link: "#faqs",
  },
  {
    name: "Contact",
    link: "#contact",
  },
];

const Footer: FC = () => {
  return (
    <section>
      <div className="bg-[#1D1918] text-white mt-28">
        <div className="container pt-28 md:pt-44">
          <div className="flex flex-col gap-12 md:gap-24 lg:gap-72 md:flex-row md:justify-between md:items-center">
            <div className="cta flex flex-col gap-8">
              <span className="uppercase text-base">
                One spot available for next month
              </span>
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-thin">
                Enough talk. Let&apos;s make something great together.
              </h2>
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
                      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                }
                className="w-min"
              >
                kristopherfana@gmail.com
              </Button>
            </div>
            <div className="navigation">
              <ul className="flex flex-col gap-8">
                {navigationLinks.map((link) => (
                  <a
                    key={link.link}
                    className="uppercase md:text-xl md:text-right lg:text-2xl"
                    href={link.link}
                  >
                    {link.name}
                  </a>
                ))}
              </ul>
            </div>
          </div>
          <p className="copyright mt-28 pb-12 text-sm opacity-30">
            Copyright © Kristopher Fana All rights reserved
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
