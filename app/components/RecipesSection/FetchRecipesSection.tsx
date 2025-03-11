import { getRecipes, Recipe } from "@/app/api/actions/actions";
import RecipesSection from "./RecipesSection";
import { WithId } from "mongodb";

export type RecipeWithDishType = Recipe & {
   type: string,
}

export default async function FetchRecipesSection() {
   const data = await getRecipes() as WithId<RecipeWithDishType>[];
   const parcedData = JSON.parse(JSON.stringify(data));
   
   return (
      <RecipesSection recipes={parcedData}/>
   )
}
