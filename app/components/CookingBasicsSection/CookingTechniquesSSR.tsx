import { CookingTips, getData } from "@/app/api/actions/actions";
import CookingBasics from "./CookingBasics";
import { WithId } from "mongodb";

export default async function CookingBasicsSSR() {
   const data = await getData('cookingTips', 'basics') as WithId<CookingTips>[];
   const parsedData = JSON.parse(JSON.stringify(data))
   
   return (
      <CookingBasics card={parsedData} />
   )
}
