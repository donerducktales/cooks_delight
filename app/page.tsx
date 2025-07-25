import Image from "next/image";
import { montserrat, roboto } from "./assets/fonts";
import styles from "./page.module.scss";
import dynamic from "next/dynamic";
import FetchRecipesSection from "./components/RecipesSection/FetchRecipesSection";
import HeroSection from "./layouts/HeroSection";
// import AboutUs from "./components/AboutUsSec(Home)/AboutUs";

const DynamicFeaturedSectionNoSSR = dynamic(
   () => import('@/app/components/FeaturedSection/FetchFeaturedRecipes'),
   { ssr: false }
);

export default function Home() {
   return (
      <main className={styles.main}>
         <div className={styles.mainContainer}>
            <HeroSection />
            <section className={styles.exploreSection}>
               <div className={styles.exploreSectionWrapper}>
                  <div className={styles.exploreFilterText}>
                     <div className={styles.exploreFilterTextTag}>
                        Explore
                     </div>
                     <h1 className={montserrat.className}>Our diverse Palette</h1>
                     <p className={roboto.className}>
                        If you are a breakfast enthusiast, a connoisseur of savory delights, or on the lookout for irresistible desserts, our curated selection has something to satisfy every palate.
                     </p>
                     <button className={roboto.className}>
                        see more
                     </button>
                  </div>
                  <div className={`${montserrat.className} ${styles.exploreFilter}`}>
                     <div className={styles.exploreFilterTable}>
                        <div className={styles.exploreFilterTableItem}>
                           <Image 
                              width={40}
                              height={40}
                              alt="breakfast-icon"
                              src={'/Home/HeroSection/breakfast-item-icon.png'}
                              quality={100}
                           />
                           <p>breakfast</p>
                        </div>
                        <div className={styles.exploreFilterTableItem}>
                           <Image 
                              width={40}
                              height={40}
                              alt="lunch-icon"
                              src={'/Home/HeroSection/lunch-item-icon.png'}
                              quality={100}
                           />
                           <p>lunch</p>
                        </div>
                        <div className={styles.exploreFilterTableItem}>
                           <Image 
                              width={40}
                              height={40}
                              alt="dinner-icon"
                              src={'/Home/HeroSection/dinner-item-icon.png'}
                              quality={100}
                           />
                           <p>dinner</p>
                        </div>
                        <div className={styles.exploreFilterTableItem}>
                           <Image 
                              width={40}
                              height={40}
                              alt="dessert-icon"
                              src={'/Home/HeroSection/dessert-item-icon.png'}
                              quality={100}
                           />
                           <p>dessert</p>
                        </div>
                        <div className={styles.exploreFilterTableItem}>
                           <Image 
                              width={40}
                              height={40}
                              alt="quick-bite-icon"
                              src={'/Home/HeroSection/quick-bite-item-icon.png'}
                              quality={100}
                           />
                           <p>quick bite!</p>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            <DynamicFeaturedSectionNoSSR />
            <FetchRecipesSection />
            {/* <AboutUs /> */}
         </div>
      </main>
   );
}
