'use client'

import { montserrat } from '@/app/assets/fonts';
import styles from './recipes-section.module.scss';
import styled from 'styled-components';
import scssvariables from '@/app/styles/_variables.module.scss';
import { recipesType } from '@/app/assets/recipesList';
import RecipeCard from '../RecipeCard/RecipeCard';
import { useState } from 'react';
import { motion } from 'motion/react';
import { WithId } from 'mongodb';
import { RecipeWithDishType } from './FetchRecipesSection';

const TabItem = styled(motion.button)`
   height: 38px;
   padding: 0 24px;
   border-radius: 24px;
   border: 1px solid ${scssvariables.dark};
   display: flex;
   justify-content: center;
   align-items: center;
   font-weight: 500;
   font-size: 0.875rem;
   color: ${scssvariables.dark};
   text-transform: uppercase;
   cursor: pointer;
`;

export default function RecipesSection({recipes}: {recipes: WithId<RecipeWithDishType>[]}) {
   const [filteredRecipes, setFilteredRecipes] = useState(recipes);
   const [color, setColor] = useState<string>('');

   const handleClick = (recipeType: string) => {
      const filtered = recipes.filter(el => el.type.includes(recipeType));
      setFilteredRecipes(filtered);
   }

   return (
      <motion.section 
         className={styles.RecipesSection}
         initial={{translateX: 500}} whileInView={{translateX: 0}} viewport={{once: true}} transition={{duration: 0.3}}
      >
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
         <div className={styles.RecipesTabWrapper}>
            {
               recipesType.map((el) => 
                  <TabItem 
                     whileTap={{scale: 0.9}} 
                     whileHover={{scale: 1.1}}
                     key={el.id} 
                     onClick={() => {handleClick(el.mealTypeAction); setColor(el.mealTypeAction)}}
                     style={{
                        backgroundColor: color === el.mealTypeAction ? 
                        scssvariables.primaryGreen : 
                        scssvariables.background,
                     }}
                  >
                     {el.mealType}
                  </TabItem>
               )
            }
         </div>
         <div className={styles.RecipesCardWrapper}>
            {filteredRecipes.map(el =>
               <RecipeCard 
                  key={el._id.toString()}
                  imgSrc={el.imgUrl}
                  imgAlt={el.title}
                  title={el.title}
                  description={el.description}
                  prepTime={el.prepTime}
                  difficulty={el.difficulty}
                  serving={el.serving}
                  // maxWidthProp='427px'
               />
            )}
         </div>
      </motion.section>
   )
}
