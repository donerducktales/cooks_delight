import { client } from "@/lib/db"

export async function GET() {
  try {
    const myClient = await client.connect();
    const myDb = myClient.db("recipes");
    const data = await myDb
      .collection("recipeCard")
      .find()
      .toArray()
    
    if (data) {
      return new Response(JSON.stringify(data));
    } else {
      return new Response(JSON.stringify([]));
    }
  } catch (error) {
    console.error(error)
  }
}