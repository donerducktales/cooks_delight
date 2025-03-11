interface RecipesType {
   id: number,
   mealType: string,
   mealTypeAction: string
}

export const recipesType: RecipesType[] = [
   {
      id: 0,
      mealType: 'All',
      mealTypeAction: '',
   },
   {
      id: 1,
      mealType: 'Vegan',
      mealTypeAction: 'Vegan',
   },
   {
      id: 2,
      mealType: 'Breakfast',
      mealTypeAction: 'Breakfast',
   },
   {
      id: 3,
      mealType: 'Lunch',
      mealTypeAction: 'Lunch',
   },
   {
      id: 4,
      mealType: 'Dinner',
      mealTypeAction: 'Dinner',
   },
   {
      id: 5,
      mealType: 'Dessert',
      mealTypeAction: 'Dessert',
   },
   {
      id: 6,
      mealType: 'Quick Bite!',
      mealTypeAction: 'Quick Bite!',
   },
];