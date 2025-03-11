'use client'

import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useCallback } from "react";
import styles from '@/app/components/FeaturedSection/featured-section.module.scss';
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { montserrat } from "@/app/assets/fonts";
import RecipeCard from "../RecipeCard/RecipeCard";
import { motion } from "motion/react";
import { WithId } from "mongodb";
import { Recipe } from "@/app/api/actions/actions";

export default function FeaturedSection({recipes}: {recipes: WithId<Recipe>[]}) {
   const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

   useEffect(() => {
      if (emblaApi) {
         emblaApi.slideNodes();
      }
   }, [emblaApi]);

   const scrollPrev = useCallback(() => {
      if (emblaApi) emblaApi.scrollPrev();
   }, [emblaApi])

   const scrollNext = useCallback(() => {
      if (emblaApi) emblaApi.scrollNext();
   }, [emblaApi])

   return (
      <motion.section 
         initial={{translateX: -500}} whileInView={{translateX: 0}} viewport={{once: true}} transition={{duration: 0.3}}
         className={`${styles.featuredSection}`}
      >
         <div className={`${styles.embla} embla`}>
            <div className={`${styles.carouselNavigation} carouselNavigation`}>
               <h1 className={montserrat.className}>featured recipes</h1>
               <div className={`${styles.navigationButtons} navigationButtons`}>
                  <motion.button 
                     className={`embla__prev`} 
                     onClick={scrollPrev}
                     whileTap={{scale: 0.9}} 
                     whileHover={{scale: 1.1}}
                  >
                     <ChevronLeftIcon className="w-5 h-6" />
                  </motion.button>
                  <motion.button 
                     className={`embla__next`} 
                     onClick={scrollNext}
                     whileTap={{scale: 0.9}} 
                     whileHover={{scale: 1.1}}   
                  >
                     <ChevronRightIcon className="w-5 h-6" />
                  </motion.button>
               </div>
            </div>
            <div className={`${styles.emblaViewport} embla__viewport`} ref={emblaRef}>
               <div className={`${styles.emblaContainer} embla__container`}>
                  {recipes?.map((el) => 
                     <div
                        key={el._id.toString()}
                        className={`${styles.emblaSlide} embla__slide`}
                     >
                        <RecipeCard
                           imgSrc={el.imgUrl}
                           imgAlt={el.title}
                           title={el.title}
                           description={el.description}
                           prepTime={el.prepTime}
                           difficulty={el.difficulty}
                           serving={el.serving}
                        />
                     </div>
                  )}
               </div>
            </div>
         </div>
      </motion.section>
   );
}
