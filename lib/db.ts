import { MongoClient, ServerApiVersion } from "mongodb";

if (!process.env.MONGODB_URI) {
   console.error('no uri')
}

export const client = new MongoClient(process.env.MONGODB_URI, {
   serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
   }
});
