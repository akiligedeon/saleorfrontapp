// src/lib/getGoldPrice.ts
/*import yahooFinance from "yahoo-finance2";

export async function getGoldPrice(): Promise<number | null> {
  try {
    const quote = await yahooFinance.quote("GC=F");
    return quote.regularMarketPrice ?? null;
  } catch (error) {
    console.error("Failed to fetch gold price:", error);
    return null;
  }
}*/

// src/lib/getGoldPrice.ts

interface CurrencyPrice {
	currency: string;
	country: string;
	date: string;
	trade_price: string;
	actual_price: string;
}

interface ApiResponse {
	data: CurrencyPrice[];
}

export async function getGoldPrice(): Promise<number | null> {
	try {
		const response = await fetch("http://cura.fyi/CurrencyPrice/api/get_latest_currency_prices/");
		const json = (await response.json()) as ApiResponse;

		if (!json.data || json.data.length === 0) {
			return null;
		}

		const lastItem = json.data[json.data.length - 1];
		const price = parseFloat(lastItem.actual_price);

		return isNaN(price) ? null : price;
	} catch (error) {
		return null;
	}
}
