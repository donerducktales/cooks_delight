'use client'

import { CookingTips } from "@/app/api/actions/actions";
import { montserrat } from "@/app/assets/fonts";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import useEmblaCarousel from "embla-carousel-react";
import { WithId } from "mongodb";
import { motion } from "motion/react";
import Image from "next/image";
import { useCallback, useEffect } from "react";

export default function CookingBasics({card}: {card: WithId<CookingTips>[]}) {
   const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
   
   useEffect(() => {
      if (emblaApi) {
         emblaApi.slideNodes();
      }
   }, [emblaApi]);

   const scrollPrev = useCallback(() => {
      if (emblaApi) emblaApi.scrollPrev();
   }, [emblaApi]);

   const scrollNext = useCallback(() => {
      if (emblaApi) emblaApi.scrollNext();
   }, [emblaApi]);
   
   return (
      <motion.section 
         className={`flex items-center justify-center w-full min-h-[543px] mt-8 ${'CookingBasicsSection'}`}
         initial={{opacity: 0}} whileInView={{opacity: 100}} viewport={{once: true}} transition={{duration: 0.5}}
      >
         <div className={`min-h-[453px] w-full ${'embla'}`}>
            <div className={`flex flex-row justify-between ${'carouselNavigation'}`}>
               <h1 className={`mb-10 mr-4 text-dark max-[520px]:text-2xl sm:text-[2.5rem] text-3xl font-bold uppercase ${montserrat.className} ${'cookingBasicsHeader'}`}>
                  Mastering the Basics
               </h1>
               <div className={`flex gap-[5px] ${'carouselNavigationButtons'}`}>
                  <motion.button
                     className={`w-9 h-9 rounded-[32px] border border-solid border-dark flex items-center justify-center ${'embla__prev'}`}
                     onClick={scrollPrev}
                     whileTap={{scale: 0.9}} 
                     whileHover={{scale: 1.1}}
                  >
                     <ChevronLeftIcon className={`w-5 h-6`}/>
                  </motion.button>
                  <motion.button
                     className={`w-9 h-9 rounded-[32px] border border-solid border-dark flex items-center justify-center ${'embla__next'}`}
                     onClick={scrollNext}
                     whileTap={{scale: 0.9}} 
                     whileHover={{scale: 1.1}}
                  >
                     <ChevronRightIcon className={`w-5 h-6`}/>
                  </motion.button>
               </div>
            </div>
            <div className={`rounded-[32px] ${'embla__viewport'}`} ref={emblaRef}>
               <div className={`gap-4 rounded-[32px] ${`embla__container`}`}>
                  {card.map((el) => 
                     <div 
                        className={`lg:flex-[0_0_33%] md:flex-[0_0_50%] flex-[0_0_100%] rounded-[32px] ${'embla__slide'}`}
                        key={el._id.toString()}
                     >
                        <div className={`min-h-[473px] h-full flex flex-col rounded-[32px] w-full bg-light ${'cookingTipsCard'}`}>
                           <Image 
                              src={el.imgUrl}
                              alt={el.title}
                              width={427}
                              height={234}
                              unoptimized={true}
                              className="w-full h-auto"
                           />
                           <div className={`h-full flex flex-col justify-between ${'cookingTipsTextWrapper'}`}>
                              <div className={`flex flex-col justify-between ${'cookingTipsText'}`}>
                                 <h1 
                                    className={`text-2xl m-6 mb-3 text-dark font-bold ${montserrat.className} ${'cookingTipsHeader'}`}
                                 >
                                    {el.title}
                                 </h1>
                                 <p className={`text-base font-light min-h-[50px] text-dark mx-6 mb-5 leading-[1.4rem] ${'cookingTipsDescription'}`}>
                                    {el.description}
                                 </p>
                              </div>
                              <div className={`w-[calc(100%_-_48px)] mx-6 mb-8 flex flex-row justify-between items-center ${'cookingTipsInfo'}`}>
                                 <div className={`w-3/6 text-xs text-dark font-medium mr-4 ${'cookingTipsInfoText'}`}>
                                    {el.readTime} - {el.date}
                                 </div>
                                 <div className={`max-w-32 w-full h-9 rounded-3xl border border-solid border-dark uppercase flex justify-center items-center text-dark font-medium text-sm ${'cookingTipsInfoButton'}`}>
                                    Read more
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  )}
               </div>
            </div>
         </div>
      </motion.section>
   );
}
