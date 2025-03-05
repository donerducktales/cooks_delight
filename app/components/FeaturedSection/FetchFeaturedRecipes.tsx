import FeaturedSection from "./FeaturedSection";
import { WithId } from "mongodb";
import { client } from "@/lib/db";

export default async function FetchFeaturedRecipes() {
   async function getRecipes() {
      'use server'
      
      try {
         const mongoClient = await client.connect();
         const selectedDb = mongoClient.db('recipes');
         const finalData = await selectedDb
            .collection('recipeCard')
            .find()
            .toArray()
   
         console.log('db connected and recipes received!!');
   
         return finalData;
   
      } catch (error) {
         console.error(error);
      } finally {
         await client.close();
      }
   }
   
   const data = await getRecipes() as WithId<Document>[];
   const parsedData = JSON.parse(JSON.stringify(data))
   
   return (
      <FeaturedSection recipes={parsedData}/>
   )
}
