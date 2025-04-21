// src/lib/getGoldPrice.ts
import yahooFinance from "yahoo-finance2";

export async function getGoldPrice() {
  try {
    const quote = await yahooFinance.quote("GC=F");
    return quote.regularMarketPrice;
  } catch (error) {
    console.error("Failed to fetch gold price:", error);
    return null;
  }
}
