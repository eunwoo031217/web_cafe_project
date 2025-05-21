// /api/cafe.js (Vercel Serverless Function)

export default async function handler(req, res) {
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const response = await fetch(process.env.COFFEE_API_KEY, {
      method: "GET"
    });

    if (!response.ok) {
      return res.status(response.status).json({ error: "Failed to fetch coffee menu" });
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching coffee data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
