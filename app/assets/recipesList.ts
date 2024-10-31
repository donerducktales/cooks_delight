interface RecipesListTypes {
   id: number,
   imgSrc: string,
   alt: string,
   title: string,
   description: string,
   prepTime: string,
   difficulty: string,
   serving: string,
}

const recipesList: RecipesListTypes[] = [
   {
      id: 0,
      imgSrc: '/Home/FeaturedSection/chicken.png',
      alt: 'chicken',
      title: 'Savory Herb-Infused Chicken',
      description: 'Indulge in the rich and savory symphony of flavors with our Savory Herb-Infused Chicken',
      prepTime: '40 min',
      difficulty: 'easy prep',
      serving: '3 serves',
   },
   {
      id: 1,
      imgSrc: '/Home/FeaturedSection/chicken.png',
      alt: 'chicken',
      title: 'KFC',
      description: 'Experience the perfect blend of zesty lemon and aromatic garlic with this roasted chicken recipe',
      prepTime: '5 min',
      difficulty: 'easy prep',
      serving: '1 serves',
   },
   {
      id: 2,
      imgSrc: '/Home/FeaturedSection/chicken.png',
      alt: 'chicken',
      title: 'Borshch',
      description: 'lalya bomba',
      prepTime: '1 hour',
      difficulty: 'medium prep',
      serving: '10 serves',
   },
];

export default recipesList;