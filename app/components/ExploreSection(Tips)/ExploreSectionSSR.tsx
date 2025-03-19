import { CookingTips, getData } from "@/app/api/actions/actions";
import ExploreSection from "./ExploreSection";
import { WithId } from "mongodb";

export default async function ExploreSectionSSR() {
   const data = await getData('cookingTips', 'special') as WithId<CookingTips>[];
   const parsedData = JSON.parse(JSON.stringify(data));
   
   return (
      <ExploreSection card={parsedData} />
   )
}
