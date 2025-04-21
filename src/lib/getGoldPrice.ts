// src/lib/getGoldPrice.ts
import yahooFinance from "yahoo-finance2";

export async function getGoldPrice(): Promise<number | null> {
  try {
    const quote = await yahooFinance.quote("GC=F");
    return quote.regularMarketPrice ?? null;
  } catch (error) {
    console.error("Failed to fetch gold price:", error);
    return null;
  }
}
