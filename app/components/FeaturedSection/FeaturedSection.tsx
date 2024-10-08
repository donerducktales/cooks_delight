'use client'

import styled from "styled-components";
import scssvariables from '@/app/styles/_variables.module.scss';
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useCallback } from "react";
import Image from "next/image";
import styles from '@/app/components/FeaturedSection/featured-section.module.scss';
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { montserrat, roboto } from "@/app/assets/fonts";

// const FeaturedSectionStyled = styled.section`
//    display: flex;
//    justify-content: center;
//    align-items: center;
//    width: 100%;
//    border: 1px solid ${scssvariables.dark}24;
//    border-radius: 32px;
//    height: 576px;
//    margin-bottom: 16px;

//    .featuredSectionContainer {
//       display: flex;
//       justify-content: center
//       align-items: center;
//    }

//    .embla {
//       height: 517px;
//    }

//    .carouselNavigation {
//       display: flex;
//       justify-content: space-between;
//    }

//    .recipeCard {
//       max-width: 632px;
//       height: 437px;
//       background-color: ${scssvariables.light};
//       display: flex;
//       flex-direction: column;
//       align-items: flex-start;
//       border-radius: 32px;
//       margin: 8px;
//    }
// `

export default function FeaturedSection() {
   const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

   useEffect(() => {
      if (emblaApi) {
         console.log(emblaApi.slideNodes());
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
      {/* // <FeaturedSectionStyled> */}
            <div className={`${styles.embla} embla`}>
               <div className={`${styles.carouselNavigation} carouselNavigation`}>
                  <h1 className={montserrat.className}>featured recipes</h1>
                  <div className={`${styles.navigationButtons} navigationButtons`}>
                     <button className={`embla__prev`} onClick={scrollPrev}>
                        <ChevronLeftIcon />
                     </button>
                     <button className={`embla__next`} onClick={scrollNext}>
                        <ChevronRightIcon />
                     </button>
                  </div>
               </div>
               <div className={`${styles.emblaViewport} embla__viewport`} ref={emblaRef}>
                  <div className={`${styles.emblaContainer} embla__container`}>
                     <div className={`${styles.emblaSlide} embla__slide`}>
                        <div className={`${styles.recipeCard} recipeCard`}>
                           <div className={styles.recipeCardImg}>
                              <Image 
                                 src={'/Home/FeaturedSection/chicken.png'}
                                 alt="Savory-Herb-Infused-Chicken"
                                 fill
                                 priority
                              />
                           </div>
                           <h1 className={`${montserrat.className} ${styles.recipeCardTitle}`}>
                              Savory Herb-Infused Chicken
                           </h1>
                           <p className={styles.recipeCardText}>
                              Indulge in the rich and savory symphony of flavors with our Savory Herb-Infused Chicken
                           </p>
                           <div className={styles.recipeInfoWrapper}>
                              <div className={styles.recipeInfoWrapperText}>
                                 <p>40 Min - easy prep - 3 serves</p>
                              </div>
                              <div className={styles.recipeInfoWrapperButton}>
                                 <button className={roboto.className}>
                                    view recipe
                                 </button>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className={`${styles.emblaSlide} embla__slide`}>
                        <div className={`${styles.recipeCard} recipeCard`}>
                           <div className={styles.recipeCardImg}>
                              <Image 
                                 src={'/Home/FeaturedSection/chicken.png'}
                                 alt="Savory-Herb-Infused-Chicken"
                                 fill
                                 priority
                              />
                           </div>
                           <h1 className={`${montserrat.className} ${styles.recipeCardTitle}`}>
                              Savory Herb-Infused Chicken
                           </h1>
                           <p className={styles.recipeCardText}>
                              Indulge in the rich and savory symphony of flavors with our Savory Herb-Infused Chicken
                           </p>
                           <div className={styles.recipeInfoWrapper}>
                              <div className={styles.recipeInfoWrapperText}>
                                 <p>40 Min - easy prep - 3 serves</p>
                              </div>
                              <div className={styles.recipeInfoWrapperButton}>
                                 <button className={roboto.className}>
                                    view recipe
                                 </button>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         {/* // </FeaturedSectionStyled> */}
      </section>
   );
}
