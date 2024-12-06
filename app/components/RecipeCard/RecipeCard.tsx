import Image from "next/image";
import { montserrat } from "@/app/assets/fonts";
import styles from '@/app/components/RecipeCard/recipe-card.module.scss';

interface RecipeCardTypes {
   imgSrc: string,
   imgAlt: string,
   title: string,
   description: string,
   prepTime: string,
   difficulty: string,
   serving: string,
   maxWidthProp: string,
}

export default function RecipeCard({
   imgSrc, imgAlt, title, description, prepTime, difficulty, serving, maxWidthProp
}: RecipeCardTypes) {
   return (
      <div 
         className={`${styles.recipeCard} recipeCard`}
         style={{
            maxWidth: maxWidthProp
         }}
      >
         <div className={`${styles.recipeCardImg} recipeCardImg`}>
            <Image 
               src={imgSrc}
               alt={imgAlt}
               fill
               priority
            />
         </div>
         <div className={styles.recipeCardTextBlock}>
            <h1 className={`${montserrat.className} ${styles.recipeCardTitle} recipeCardTitle`}>
               {title}
            </h1>
            <p className={`${styles.recipeCardText} recipeCardText`}>
               {description}
            </p>
         </div>
         <div className={`${styles.recipeInfoWrapper} recipeInfoWrapper`}>
            <div className={`${styles.recipeInfoWrapperText} recipeInfoWrapperText`}>
               <p>{prepTime} - {difficulty} - {serving}</p>
            </div>
            <div className={`${styles.recipeInfoWrapperButton} recipeInfoWrapperButton`}>
               <button>view recipe</button>
            </div>
         </div>
      </div>
   );
}
