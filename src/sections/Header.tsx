import Button from "@/components/button";
import { FC } from "react";

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const navItems = [
  {
    label: "About",
    href: "#intro",
  },
  {
    label: "Selected Works",
    href: "#projects",
  },
  {
    label: "Testimonials",
    href: "#testimonials",
  },
  {
    label: "FAQs",
    href: "#faqs",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

const Header: FC = () => {
  return (
    <div>
      <header className="fixed top-0 left-0 w-full h-20 backdrop-blur-md">
        <div className="container !max-w-full">
          <div className="flex justify-between h-20 items-center">
            {/* Name/Main Link */}
            <div>
              <a href="/">
                <span className="text-xl font-bold uppercase">
                  Kristopher&nbsp; Fana
                </span>
              </a>
            </div>
            {/* Mobile Nav and Contact me */}
            <div className="flex gap-4">
              <div className="size-11 border border-stone-400 rounded-full items-center inline-flex justify-center bg-stone-200">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="3"
                    y="15"
                    width="18"
                    height="2"
                    fill="currentColor"
                  />
                  <rect x="3" y="7" width="18" height="2" fill="currentColor" />
                </svg>
              </div>
              <Button className="hidden md:inline-flex" variant="primary">Contact me</Button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
