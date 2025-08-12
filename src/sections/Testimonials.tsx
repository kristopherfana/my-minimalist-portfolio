import Button from "@/components/button";
import { FC } from "react";
import Image from "next/image";
import React from "react";
import image1 from "@/assets/images/testimonial-1.jpg";
import image2 from "@/assets/images/testimonial-2.jpg";
import image3 from "@/assets/images/testimonial-3.jpg";

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const testimonials = [
  {
    name: "Sarah Chen",
    company: "Pixel Perfect",
    role: "Head of Design",
    quote:
      "Alex's expertise in both technical development and design created a beautiful, high-performing website.",
    image: image1,
    imagePositionY: 0.2,
  },
  {
    name: "Marcus Rodriguez",
    company: "Craft Coffee Co.",
    role: "Founder",
    quote:
      "Alex transformed our boutique coffee brand with a website that perfectly balances aesthetics and functionality.",
    image: image2,
    imagePositionY: 0.1,
  },
  {
    name: "Emily Watson",
    company: "Studio Minimal",
    role: "Creative Director",
    quote:
      "The collaborative process was amazing. Alex brought lots of fresh perspectives and innovative solutions.",
    image: image3,
    imagePositionY: 0.55,
  },
];

const Testimonials: FC = () => {
  return (
    <section className="overflow-hidden">
      <div className="mt-32 md:mt-52 lg:mt-60 *:text-4xl *:md:text-7xl *:lg:text-9xl w-[160%] flex flex-col *:tracking-tighter overflow-hidden">
        <span>Some nice words from my past clients</span>
        <span className="text-red-orange-500">
          Some nice words from my past clients
        </span>
      </div>
      <div className="testimonials container mt-16">
        {testimonials.map((testimonial, index) => (
          <React.Fragment key={testimonial.name}>
            {index === 0 && (
              <div className="testimonial flex flex-col md:flex-row md:gap-7 lg:gap-12">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="aspect-square object-cover md:aspect-auto md:size-5/12 lg:size-full"
                />
                <div className="testimonial-text mt-5 flex flex-col space-y-3 md:mt-0 justify-center">
                  <span className="text-2xl md:text-5xl lg:text-6xl lg:w-4/5">
                    &quot;{testimonial.quote}&quot;
                  </span>
                  <span className="md:text-lg">
                    {testimonial.name}, {testimonial.role} at{" "}
                    {testimonial.company}
                  </span>
                </div>
              </div>
            )}
          </React.Fragment>
        ))}
      <div className="navigation">
      <div className="buttons mt-5 flex gap-5 *:rounded-full">
                  <Button
                    variant="icon-only"
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
                          d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                        />
                      </svg>
                    }
                  ></Button>
                  <Button
                    variant="icon-only"
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
                          d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                        />
                      </svg>
                    }
                  ></Button>
                </div>
      </div>
      </div>
    </section>
  );
};

export default Testimonials;
