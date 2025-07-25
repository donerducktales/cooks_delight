'use client';

import { montserrat, roboto } from "@/app/assets/fonts";
import Image from "next/image";
import styled from "styled-components";
import scssvariables from '@/app/styles/_variables.module.scss';

const EssentialsSectionItem = styled.div`
   height: 70px;
   max-width: 389px;
   width: 100%;   
   display: flex;
   flex-direction: row;
   align-items: center;
   gap: 40px;

   .itemTextWrapper {
      display: flex;
      flex-direction: column;
      align-items: start;
      gap: 12px;

      h1 {
         color: ${scssvariables.primaryRed};
         font-size: 1.125rem;
         font-weight: 600;
         text-transform: uppercase;
      }

      p {
         color: ${scssvariables.dark};
         font-size: 1rem;
         font-weight: 300;
         line-height: 1.3rem;
      }
   }

   @media (max-width: 400px) {
      margin: 16px 0 16px 0;
   }
`;

export default function EssentialSection() {
   return (
      <div className={`rounded-3xl border border-solid border-dark border-opacity-25 w-full mt-16 mb-4 pt-10 pb-10 pl-8 pr-8 flex flex-row items-center flex-wrap justify-center gap-9 ${'essentialSection'}`}>
         <EssentialsSectionItem className="essentialsSectionItem">
            <div className="itemImage">
               <Image 
                  src={'/CookingTips/knife.png'}
                  alt="knife image"
                  width={64}
                  height={64}
               />
            </div>
            <div className="itemTextWrapper">
               <h1 className={`${montserrat.className}`}>
                  Quality Tools
               </h1>
               <p className={`${roboto.className}`}>
                  Invest in high-quality knives, cutting boards, and cookware.
               </p>
            </div>
         </EssentialsSectionItem>
         <EssentialsSectionItem>
            <div className="itemImage">
               <Image 
                  src={'/CookingTips/math-compass.png'}
                  alt="knife image"
                  width={64}
                  height={64}
               />
            </div>
            <div className="itemTextWrapper">
               <h1 className={`${montserrat.className}`}>
                  Essential Utensils
               </h1>
               <p className={`${roboto.className}`}>
                  Have a variety of utensils, including spatulas, tongs, and ladles.
               </p>
            </div>
         </EssentialsSectionItem>
         <EssentialsSectionItem>
            <div className="itemImage">
               <Image 
                  src={'/CookingTips/cooking-scales.png'}
                  alt="knife image"
                  width={64}
                  height={64}
               />
            </div>
            <div className="itemTextWrapper">
               <h1 className={`${montserrat.className}`}>
                  Measuring Accuracy
               </h1>
               <p className={`${roboto.className}`}>
                  Use measuring cups and spoons for precise ingredient quantities.
               </p>
            </div>
         </EssentialsSectionItem>
      </div>
   );
}
