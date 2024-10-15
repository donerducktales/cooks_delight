import Image from "next/image";
import { montserrat, roboto } from "./assets/fonts";
import styles from "./page.module.scss";
import FeaturedSection from "./components/FeaturedSection/FeaturedSection";

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
            <FeaturedSection />
            <section className={styles.aboutUsSection}>
               <div className={styles.aboutUsSectionContainer}>
                  <div className={styles.aboutUsRow1}>
                     <div className={styles.aboutUsRow1Col1}>
                        <div className={styles.aboutUsRow1Col1Text}>
                           <div className={styles.aboutUsTextTag}>
                              About Us
                           </div>
                           <h1 className={montserrat.className}>
                              Our Culinary Chronicle
                           </h1>
                           <p className={roboto.className}>
                              Our journey is crafted with dedication, creativity, and an unrelenting commitment to delivering delightful culinary experiences. Join us in savoring the essence of every dish and the stories that unfold.
                           </p>
                           <button>Read more</button>
                        </div>
                        <div className={styles.aboutUsRow1Col1ImageBlock}>
                           <Image 
                              src={'/Home/AboutUsSection/grilled-sandwich.png'}
                              alt="grilled sandwich"
                              fill
                              priority
                           />
                        </div>
                     </div>
                     <div className={styles.aboutUsRow1Col2}>
                        <div className={styles.aboutUsRow1Col2ImageBlock}>
                           <Image 
                              src={'/Home/AboutUsSection/grilled-vegetables.png'}
                              alt="grille vegetables"
                              fill
                              priority
                           />
                        </div>
                     </div>
                  </div>
                  <div className={styles.aboutUsRow2}>
                     <div className={styles.aboutUsRow2Col1}>
                        <div className={styles.aboutUsRow2ImageBlock}>
                           <Image 
                              src={'/Home/AboutUsSection/cooks-image.png'}
                              alt="cooks image"
                              fill
                              priority
                           /> 
                        </div>
                     </div>
                  </div>
               </div>
            </section>
         </div>
      </main>
   );
}
