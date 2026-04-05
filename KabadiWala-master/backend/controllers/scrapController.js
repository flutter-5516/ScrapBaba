import { insertScrap, findScrapsByLocation } from "../model/scrapModel.js";

export async function createScrap(req, res) {
  try {
    const { name, phone, city, location, scrapType, scrapWeight, pricePerKg } = req.body;
    const user = req.user || {};

    if (!name || !phone || !scrapType || !scrapWeight || !pricePerKg || (!city && !location)) {
      return res.status(400).json({ error: "Missing required fields." });
    }

    const scrapPayload = {
      name: name.trim(),
      phone: phone.trim(),
      city: city?.trim() || location?.trim(),
      location: location?.trim() || city?.trim(),
      scrapType: scrapType.trim(),
      scrapWeight: Number(scrapWeight),
      pricePerKg: Number(pricePerKg),
      createdAt: new Date(),
      createdBy: user.uid || null,
    };

    const scrapId = await insertScrap(scrapPayload);

    return res.status(201).json({
      result: {
        success: true,
        scrapId: scrapId.toString(),
      },
    });
  } catch (error) {
    console.error("createScrap error:", error);
    return res.status(500).json({ error: "Unable to create scrap entry." });
  }
}

export async function getScrapsByLocation(req, res) {
  try {
    const { location } = req.body;
    const scraps = await findScrapsByLocation(location);

    return res.status(200).json({ result: scraps });
  } catch (error) {
    console.error("getScrapsByLocation error:", error);
    return res.status(500).json({ error: "Unable to fetch scrap data." });
  }
}
