export interface ICrypto {
  id: string;
  symbol: string;
  name: string;
  image: { large: string };
  market_data: {
    current_price: { brl: number; usd: number };
    ath: { brl: number; usd: number };
    ath_date: { brl: string };
    high_24h: { brl: number; usd: number };
    low_24h: { brl: number; usd: number };
    last_updated: string;
  };
}
