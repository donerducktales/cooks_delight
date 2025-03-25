import { client } from "@/lib/db";

export async function GET(request: Request) {
   const { searchParams } = new URL(request.url);
   const searchValue = searchParams.get('searchValue');

   try {
      const mongoClient = await client.connect();
      const db = mongoClient.db('recipes');
      const data = await db
         .collection('recipeCard')
         .find({
            $or: [
               { title: { $regex: searchValue, $options: 'i' } },
               { type: { $regex: searchValue, $options: 'i' } },
            ],
         }).toArray()

      console.log('found by input successful')

      if (data) {
         data.map((el) => ({
            ...el,
            _id: el._id.toString(),
         }));
      } else {
         return []; 
      }

      return new Response(JSON.stringify(data))

   } catch (error) {
      alert(error)
   }
}