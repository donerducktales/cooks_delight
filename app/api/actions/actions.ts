import { client } from "@/lib/db";
import { ObjectId, WithId } from "mongodb";

export interface Recipe {
   _id: ObjectId;
   imgUrl: string;
   title: string;
   description: string;
   prepTime: string;
   difficulty: string;
   serving: string;
}

export async function getRecipes() {
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
      console.log('error above');
      return [];
   }
}