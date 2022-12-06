import { format } from "date-fns";
import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { ICrypto } from "../../types/ICrypto";

export default function DateHistory({ cryptoId }: { cryptoId: string }) {
  const [date, setDate] = useState(new Date());
  const [cryptoSearch, setCryptoSearch] = useState<ICrypto>({} as ICrypto);
  const [showPrice, setShowPrice] = useState(false);
  const [error, setError] = useState(false);

  async function handleConsult() {
    console.log(date);

    if (+date > +new Date()) {
      setShowPrice(false);
      setError(true);

      setTimeout(() => {
        setError(false);
      }, 2000);
      return;
    }
    const dateFormat = format(date, "dd-MM-yyyy");
    const res = await fetch(
      `https://api.coingecko.com/api/v3/coins/${cryptoId}/history?date=${dateFormat}`
    );
    const data = await res.json();

    setCryptoSearch(data);
    setShowPrice(true);
  }

  return (
    <section className="mt-10 flex items-center gap-10 sm:gap-5 sm:flex-col">
      <div>
        <h2 className="text-2xl mb-4">Consultar histórico de preço</h2>
        <DatePicker
          selected={date}
          onChange={(date) => setDate(date as Date)}
          dateFormat="dd/MM/yyyy"
          className="border border-black cursor-pointer"
        />
        {error && (
          <p className="font-semibold text-red-600">
            Você precisa informar uma data anterior ao dia atual.
          </p>
        )}
        <button
          className="mt-3 py-[3px] px-[5px] border rounded-2xl border-blue-500 hover:bg-blue-500 hover:text-white"
          onClick={handleConsult}
        >
          Consultar
        </button>
      </div>
      {showPrice && (
        <div>
          <h3 className="text-lg font-semibold">
            Preço no dia {format(date, "dd/MM/yyyy")}
          </h3>
          <p>
            R${" "}
            {cryptoSearch.market_data.current_price.brl
              .toFixed(2)
              .replace(".", ",")}
          </p>
          <p>US$ {cryptoSearch.market_data.current_price.usd.toFixed(2)}</p>
        </div>
      )}
    </section>
  );
}
