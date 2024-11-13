import { montserrat } from '@/app/assets/fonts';
import styles from './recipes-section.module.scss';

export default function RecipesSection() {
   return (
      <section className={styles.RecipesSection}>
         <div className={styles.RecipesTextWrapper}>
            <div className={styles.RecipesTextWrapperTag}>
               Recipes
            </div>
            <h1 className={`${styles.RecipesTextWrapperHeader} ${montserrat.className}`}>
               Embark on a journey
            </h1>
            <p className={styles.RecipesTextWrapperParagraph}>
               With our diverse collection of recipes we have something to satisfy every palate.
            </p>
         </div>
      </section>
   )
}
