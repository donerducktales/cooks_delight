import { client } from "@/lib/db";
import { ObjectId } from "mongodb";

export interface Recipe {
   _id: ObjectId;
   imgUrl: string;
   title: string;
   description: string;
   prepTime: string;
   difficulty: string;
   serving: string;
}

export interface CookingTips {
   _id: ObjectId;
   imgUrl: string;
   title: string;
   description: string;
   readTime: string;
   date: string;
}

export async function getData(dbName: string, collName: string) {
   try {
      const mongoClient = await client.connect();
      const selectedDb = mongoClient.db(dbName);
      const finalData = await selectedDb
         .collection(collName)
         .find()
         .toArray()
         // .toArray() as WithId<Recipe>[]

      console.log('db connected and recipes received!!');

      return finalData;

   } catch (error) {
      console.error(error);
      console.log('error above');
      return [];
   }
}