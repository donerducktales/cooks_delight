'use client'

import { CookingTips } from "@/app/api/actions/actions";
import { montserrat } from "@/app/assets/fonts";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import useEmblaCarousel from "embla-carousel-react";
import { WithId } from "mongodb";
import { motion } from "motion/react";
import { useCallback, useEffect } from "react";


export default function ExploreSection({card}: {card: WithId<CookingTips>[]}) {
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
      <section className={`flex items-center justify-center w-full h-[648px] mt-4 rounded-[32px] bg-primaryLightBlue ${'exploreSection'}`}>
         <div className={`min-h-[464px] w-full sm:mx-10 mx-4 ${'embla'}`}>
            <div className={`flex flex-row justify-between pt-4 ${'carouselNavigation'}`}>
               <h1 className={`mb-10 mr-4 text-dark max-[520px]:text-2xl sm:text-[2.5rem] text-3xl font-bold uppercase ${montserrat.className} ${'exploreSectionHeader'}`}>
                  Nourishing Every Palate
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
                        key={el._id.toString()}
                        className={`lg:flex-[0_0_33%] md:flex-[0_0_50%] flex-[0_0_100%] rounded-3xl max-w-[400px] ${'embla__slide'}`}
                        style={{
                           backgroundImage: `url(${el.imgUrl})`
                        }}
                     >
                        <div 
                           className={`min-h-[464px] rounded-3xl w-full h-full flex flex-col justify-end ${'exploreSectionCard'}`}
                           style={{
                              background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(38,37,34,0.8) 64%)',
                           }}
                        >
                           <div className={`flex flex-col mx-6 ${'exploreCardTextWrapper'}`}>
                              <div className={`flex flex-col items-start gap-3 mb-4 ${'exploreCardText'}`}>
                                 <h1 className={`text-background font-bold text-2xl ${montserrat.className} ${'exploreCardHeader'}`}>
                                    {el.title}
                                 </h1>
                                 <p className={`text-background text-base leading-[1.4rem] font-light ${'exploreCardDescription'}`}>
                                    {el.description}
                                 </p>
                              </div>
                              <div className={`flex flex-row justify-between max-[425px]:flex-col max-[425px]:gap-2 max-[425px]:items-start items-center w-full mb-3 ${'exploreCardInfo'}`}>
                                 <div className={`text-background text-xs font-medium ${'exploreCardInfoText'}`}>
                                    {el.readTime} - {el.date}
                                 </div>
                                 <button className={`w-32 h-9 max-[425px]:w-full text-background bg-opacity-100 uppercase rounded-3xl border border-solid border-background text-sm ${'exploreCardButton'}`}>
                                    Read More
                                 </button>
                              </div>
                           </div>
                        </div>
                     </div>
                  )}
               </div>
            </div>
         </div>
      </section>
   )
}
