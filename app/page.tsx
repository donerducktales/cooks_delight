import Image from "next/image";
import { montserrat, roboto } from "./assets/fonts";
import styles from "./page.module.scss";
import RecipesSection from "./components/RecipesSection/RecipesSection";
import FetchFeaturedRecipes from "./components/FeaturedSection/FetchFeaturedRecipes";
// import AboutUs from "./components/AboutUsSec(Home)/AboutUs";

export default function Home() {
   return (
      <main className={styles.main}>
         <div className={styles.mainContainer}>
            <section className={styles.heroSection}>
               <div className={styles.heroTextWrapper}>
                  <h1 className={montserrat.className}>Unleash Culinary Excellence</h1>
                  <p className={roboto.className}>
                     Explore a world of flavors, discover handcrafted recipes, and let the aroma of our passion for cooking fill your kitchen
                  </p>
                  <button className={roboto.className}>
                     explore recipes
                  </button>
               </div>
            </section>
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
            <FetchFeaturedRecipes />
            <RecipesSection />
            {/* <AboutUs /> */}
         </div>
      </main>
   );
}
