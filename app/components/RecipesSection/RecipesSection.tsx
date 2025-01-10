'use client'

import { montserrat } from '@/app/assets/fonts';
import styles from './recipes-section.module.scss';
import styled from 'styled-components';
import scssvariables from '@/app/styles/_variables.module.scss';
import recipesList from '@/app/assets/recipesList';
import RecipeCard from '../RecipeCard/RecipeCard';
import { useState } from 'react';

const TabItem = styled.button`
   height: 38px;
   padding: 0 24px;
   border-radius: 24px;
   border: 1px solid ${scssvariables.dark};
   background-color: ${scssvariables.background};
   display: flex;
   justify-content: center;
   align-items: center;
   font-weight: 500;
   font-size: 0.875rem;
   color: ${scssvariables.dark};
   text-transform: uppercase;
   cursor: pointer;
`;

export default function RecipesSection() {
   const [filteredRecipes, setFilteredRecipes] = useState(recipesList);

   const handleClick = (recipeType: string) => {
      const filtered = recipesList.filter(el => el.type.includes(recipeType));
      setFilteredRecipes(filtered);
   }

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
         <div className={styles.RecipesTabWrapper}>
            <TabItem onClick={() => handleClick('')}>All</TabItem>
            <TabItem onClick={() => handleClick('Vegan')}>Vegan</TabItem>
            <TabItem onClick={() => handleClick('Breakfast')}>Breakfast</TabItem>
            <TabItem onClick={() => handleClick('Lunch')}>Lunch</TabItem>
            <TabItem onClick={() => handleClick('Dinner')}>Dinner</TabItem>
            <TabItem onClick={() => handleClick('Dessert')}>Dessert</TabItem>
            <TabItem onClick={() => handleClick('Quick Bite!')}>Quick Bite!</TabItem>
         </div>
         <div className={styles.RecipesCardWrapper}>
            {filteredRecipes.map(el =>
               <RecipeCard 
                  key={el.id}
                  imgSrc={el.imgSrc}
                  imgAlt={el.alt}
                  title={el.title}
                  description={el.description}
                  prepTime={el.prepTime}
                  difficulty={el.difficulty}
                  serving={el.serving}
                  maxWidthProp='427px'
               />
            )}
         </div>
      </section>
   )
}
