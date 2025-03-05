import FeaturedSection from "./FeaturedSection";
import { ObjectId, WithId } from "mongodb";
import { client } from "@/lib/db";

interface Recipe {
   _id: ObjectId;
   imgUrl: string;
   title: string;
   description: string;
   prepTime: string;
   difficulty: string;
   serving: number;
}

export default async function FetchFeaturedRecipes() {
   async function getRecipes() {
      'use server'
      
      try {
         const mongoClient = await client.connect();
         const selectedDb = mongoClient.db('recipes');
         const finalData = await selectedDb
            .collection('recipeCard')
            .find()
            .toArray() as WithId<Recipe>[]
   
         console.log('db connected and recipes received!!');
   
         return finalData;
   
      } catch (error) {
         console.error(error);
      } finally {
         await client.close();
      }
   }
   
   const data = await getRecipes();
   const parsedData = JSON.parse(JSON.stringify(data))
   
   return (
      <FeaturedSection recipes={parsedData}/>
   )
}
