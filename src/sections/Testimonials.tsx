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
              <div className="testimonial">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="aspect-square object-cover md:aspect-auto"
                />
                <div className="testimonial-text text-2xl mt-5">
                &quot;{testimonial.quote}&quot;
                </div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
