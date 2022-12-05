import { format } from "date-fns";
import { ICrypto } from "../../@types/ICrypto";

interface Prop {
  crypto: ICrypto;
}

export default function MarketInfos({ crypto }: Prop) {
  return (
    <section className="flex justify-center gap-10 mt-5 sm:gap-5 sm:flex-col">
      <div>
        <h2 className="text-2xl">Preço atual</h2>
        <div className="flex gap-3">
          <p>R$ {crypto.market_data.current_price.brl}</p>
          <p>US$ {crypto.market_data.current_price.usd}</p>
        </div>
      </div>
      <div>
        <h2 className="text-2xl">Preço mais alto 24h</h2>
        <div className="flex gap-3">
          <p>R$ {crypto.market_data.high_24h.brl}</p>
          <p>US$ {crypto.market_data.high_24h.usd}</p>
        </div>
        <h2 className="text-2xl mt-3">Preço mais baixo 24h</h2>
        <div className="flex gap-3">
          <p>R$ {crypto.market_data.low_24h.brl}</p>
          <p>US$ {crypto.market_data.low_24h.usd}</p>
        </div>
      </div>
      <div>
        <h2 className="text-2xl">Preço mais alto</h2>
        <div className="flex gap-3">
          <p>R$ {crypto.market_data.ath.brl}</p>
          <p>US$ {crypto.market_data.ath.usd}</p>
        </div>
        <p>
          Data:
          {format(new Date(crypto.market_data.ath_date.brl), "dd/MM/yyyy")}
        </p>
      </div>
    </section>
  );
}
