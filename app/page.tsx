import { montserrat, roboto } from "./assets/fonts";
import styles from "./page.module.scss";

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
         </div>
      </main>
   );
}
