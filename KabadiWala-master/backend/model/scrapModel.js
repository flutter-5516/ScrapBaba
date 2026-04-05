import { getDb } from "./db.js";

const COLLECTION_NAME = "scraps";

export async function insertScrap(scrapData) {
  const db = getDb();
  const result = await db.collection(COLLECTION_NAME).insertOne(scrapData);
  return result.insertedId;
}

export async function findScrapsByLocation(location) {
  const db = getDb();
  const query = {};

  if (location) {
    const normalizedLocation = location.trim();
    query.$or = [
      { city: { $regex: new RegExp(`^${normalizedLocation}$`, "i") } },
      { location: { $regex: new RegExp(`^${normalizedLocation}$`, "i") } },
    ];
  }

  const scraps = await db.collection(COLLECTION_NAME).find(query).toArray();
  return scraps;
}
