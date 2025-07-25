"use client";

import { montserrat } from "@/app/assets/fonts";
import useViewPortSize from "@/app/assets/customHooks/useViewPortSize";
import { motion } from "motion/react";
import styled from "styled-components";
import scssvariables from "@/app/styles/_variables.module.scss";

const SubscribeButton = styled.button`
  height: 38px;
  min-width: 122px;
  font-size: 0.875rem;
  background-color: ${scssvariables.dark};
  color: ${scssvariables.light};
  text-transform: uppercase;
  margin-right: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-weight: 500;
  cursor: pointer;
  border: none;
  outline: none;
  border-radius: 24px;

  @media (max-width: 768px) {
    max-width: 437px;
    width: calc(99% - 24px);
    margin: 0;
    margin-bottom: 48px;
    height: 50px;
  }
`;

export default function CTAsubscribeSection() {
  const windowSize = useViewPortSize();

  return (
    <motion.section
      className={`CtaSubscribeSection w-full bg-background flex flex-col items-center`}
      initial={{ scale: 0.5 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
    >
      <div
        className={`CtaSubscribeSectionContainer max-w-[1313px] w-[calc(100%-32px)] min-h-[486px] mx-4 rounded-[40px] bg-primaryRed mb-4 flex flex-col items-center`}
      >
        <div
          className={`CtaSubscribeTextWrapper flex flex-col items-center max-w-[900px] mx-10 mt-16 mb-12`}
        >
          <h2 className="md:text-lg text-base leading-6 font-medium text-background text-opacity-80 uppercase mb-3">
            subscribe
          </h2>
          <h1
            className={`${montserrat.className} md:text-[5rem] text-[2.375rem] text-light max-w-[876px] font-extrabold text-center uppercase mb-3`}
          >
            Join the fun Subscribe now!
          </h1>
          <p className="max-w-[648px] text-light md:text-[1.313rem] text-base leading-6  text-center md:leading-8">
            Subscribe to our newsletter for a weekly serving of recipes, cooking
            tips, and exclusive insights straight to your inbox.
          </p>
        </div>
        <div
          className={`CtaSubscribeInput flex justify-center items-center max-w-[426px] w-[calc(100%-32px)] bg-background rounded-[50px] h-[50px] pl-[3px] md:mb-12 mb-2`}
        >
          <input
            type="text"
            placeholder="Email Address"
            className="w-full md:p-1 md:pl-6 py-1 px-6 flex-grow  outline-none mr-2 text-[1.313rem] placeholder:text-dark placeholder:text-opacity-40 placeholder:text-[1.313rem] rounded-full bg-background"
          />
          {windowSize.width > 768 && (
            <SubscribeButton>Subscribe</SubscribeButton>
          )}
        </div>
        {windowSize.width <= 768 && (
          <SubscribeButton>Subscribe</SubscribeButton>
        )}
      </div>
    </motion.section>
  );
}
