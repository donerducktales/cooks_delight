'use client'

import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useCallback } from "react";
import styles from '@/app/components/FeaturedSection/featured-section.module.scss';
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { montserrat, roboto } from "@/app/assets/fonts";
import recipesList from "@/app/assets/recipesList";
import RecipeCard from "../RecipeCard/RecipeCard";

export default function FeaturedSection() {
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
      <section className={`${styles.featuredSection}`}>
         <div className={`${styles.embla} embla`}>
            <div className={`${styles.carouselNavigation} carouselNavigation`}>
               <h1 className={montserrat.className}>featured recipes</h1>
               <div className={`${styles.navigationButtons} navigationButtons`}>
                  <button className={`embla__prev`} onClick={scrollPrev}>
                     <ChevronLeftIcon className="w-5 h-6" />
                  </button>
                  <button className={`embla__next`} onClick={scrollNext}>
                     <ChevronRightIcon className="w-5 h-6" />
                  </button>
               </div>
            </div>
            <div className={`${styles.emblaViewport} embla__viewport`} ref={emblaRef}>
               <div className={`${styles.emblaContainer} embla__container`}>
                  {recipesList.map((el) => 
                     <div 
                        key={el.id}
                        className={`${styles.emblaSlide} embla__slide`}
                     >
                        <RecipeCard
                           imgSrc={el.imgSrc}
                           imgAlt={el.alt}
                           title={el.title}
                           description={el.description}
                           prepTime={el.prepTime}
                           difficulty={el.difficulty}
                           serving={el.serving}
                           maxWidthProp="632px"
                        />
                     </div>
                  )}
               </div>
            </div>
         </div>
      </section>
   );
}
