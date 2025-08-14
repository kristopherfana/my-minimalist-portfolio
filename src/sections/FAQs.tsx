import Button from "../components/button";
import { FC } from "react";
import React from "react";

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const faqs = [
  {
    question: "How long does it take to build a website?",
    answer:
      "It depends on the complexity of the website and the scope of the project.",
  },
  {
    question: "What is your development process like?",
    answer:
      "I follow a hands-on approach starting with project planning, building out the core features, and regular check-ins to make sure everything matches your needs.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes, I work with clients globally and can accommodate different time zones for meetings and communication.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "I have experience across various industries including technology, retail, hospitality, and professional services, bringing fresh perspectives to each project.",
  },
];

const FAQs: FC = () => {
  return (
    <section>
      <div className="container mt-44 md:mt-56 lg:mt-72">
        <h2 className="text-4xl md:text-6xl lg:text-7xl">FAQs</h2>
        <div className="questions border-t border-dotted border-t-zinc-400 mt-10">
          {faqs.map((question) => (
            <React.Fragment key={"index"}>
              <div className="py-6 border-b border-dotted border-b-zinc-400 flex justify-between gap-6">
                <div className="question text-xl md:text-2xl">{question.question}</div>
                <div>
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
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                    }
                  ></Button>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
