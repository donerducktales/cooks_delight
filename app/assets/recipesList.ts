interface RecipesList {
   id: number,
   imgSrc: string,
   alt: string,
   title: string,
   type: string,
   description: string,
   prepTime: string,
   difficulty: string,
   serving: string,
}

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

const recipesList: RecipesList[] = [
   {
      id: 0,
      imgSrc: '/Home/RecipeCard/chicken-image.png',
      alt: 'chicken',
      title: 'Savory Herb-Infused Chicken',
      type: 'Dinner',
      description: 'Indulge in the rich and savory symphony of flavors with our Savory Herb-Infused Chicken',
      prepTime: '40 min',
      difficulty: 'easy prep',
      serving: '3 serves',
   },
   {
      id: 1,
      imgSrc: '/Home/RecipeCard/lemon-chicken.png',
      alt: 'lemon chicken',
      title: 'Lemon Garlic Grilled Chicken',
      type: 'Dinner',
      description: 'Experience the perfect blend of zesty lemon and aromatic garlic with this roasted chicken recipe',
      prepTime: '5 min',
      difficulty: 'easy prep',
      serving: '1 serves',
   },
   {
      id: 2,
      imgSrc: '/Home/RecipeCard/spaghetti.png',
      alt: 'spaghetti',
      title: 'Spaghetti Aglio e Olio',
      type: 'Lunch',
      description: 'A minimalist yet flavorful dish with garlic, olive oil, and a hint of red pepper flakes.',
      prepTime: '2 hour',
      difficulty: 'medium prep',
      serving: '10 serves',
   },
   {
      id: 3,
      imgSrc: '/Home/RecipeCard/blueberry.png',
      alt: 'blueberry',
      title: 'Berry Bliss Smoothie Bowl',
      type: 'Vegan',
      description: 'This berry smoothie bowl is not only visually appealing but also a powerhouse of antioxidants.',
      prepTime: '10 Min',
      difficulty: 'easy prep',
      serving: '2 serves',
   },
   {
      id: 4,
      imgSrc: '/Home/RecipeCard/quinoa-veggie.png',
      alt: 'blueberry',
      title: 'Quinoa Veggie Stir-Fry',
      type: 'Vegan',
      description: 'Quick, wholesome, and bursting with flavors, its perfect for a healthy weeknight dinner.',
      prepTime: '30 Min',
      difficulty: 'easy prep',
      serving: '3 serves',
   },
   {
      id: 5,
      imgSrc: '/Home/RecipeCard/grilled-veggies.png',
      alt: 'grilled veggies',
      title: 'Grilled Veggies with Sauce',
      type: 'Vegan',
      description: 'Served with a zesty chimichurri sauce its a perfect addition to your outdoor gatherings.',
      prepTime: '25 Min',
      difficulty: 'easy prep',
      serving: '6 serves',
   },
];

export default recipesList;