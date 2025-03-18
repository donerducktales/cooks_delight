import FeaturedSection from "./FeaturedSection";
import { WithId } from "mongodb";
import { getData, Recipe } from "@/app/api/actions/actions";

export default async function FetchFeaturedRecipes() {
   const data = await getData('recipes', 'recipeCard') as WithId<Recipe>[];
   const parsedData = JSON.parse(JSON.stringify(data))
   
   return (
      <FeaturedSection recipes={parsedData}/>
   )
}
