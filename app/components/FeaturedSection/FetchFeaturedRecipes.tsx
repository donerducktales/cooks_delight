import FeaturedSection from "./FeaturedSection";
import { WithId } from "mongodb";
import { getRecipes, Recipe } from "@/app/api/actions/actions";

export default async function FetchFeaturedRecipes() {
   const data = await getRecipes() as WithId<Recipe>[];
   const parsedData = JSON.parse(JSON.stringify(data))
   
   return (
      <FeaturedSection recipes={parsedData}/>
   )
}
