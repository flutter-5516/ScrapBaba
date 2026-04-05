import { MongoClient } from "mongodb";

let cachedClient = null;
let cachedDb = null;

export async function connectToDatabase() {
  if (cachedDb && cachedClient) {
    return cachedDb;
  }

  const mongoUrl = process.env.MONGO_URL;
  if (!mongoUrl) {
    throw new Error("MONGO_URL is not defined in environment variables.");
  }

  const client = new MongoClient(mongoUrl);

  await client.connect();

  cachedClient = client;
  cachedDb = client.db();

  console.log("Connected to MongoDB");

  return cachedDb;
}

export function getDb() {
  if (!cachedDb) {
    throw new Error("Database not initialized. Call connectToDatabase first.");
  }
  return cachedDb;
}
