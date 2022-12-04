import { GetServerSidePropsContext, GetStaticPropsContext } from "next";
import { format } from "date-fns";
import Head from "next/head";
import Image from "next/image";

interface Prop {
  crypto: {
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
  };
}

export default function Cryptocurrency({ crypto }: Prop) {
  return (
    <>
      <Head>
        <title>{crypto.name} | CryptoNext</title>
      </Head>

      <main className="px-20 py-10">
        <section className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl">{crypto.name}</h1>
            <p className="text-2xl text-gray-500">{crypto.symbol}</p>
          </div>
          <Image
            src={crypto.image.large}
            alt={crypto.name}
            width={200}
            height={200}
          />
        </section>
        <section className="flex justify-center gap-10 mt-5">
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
      </main>
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { id } = context.params as { id: string };

  const res = await fetch(
    `https://api.coingecko.com/api/v3/coins/${id}?localization=pt&tickers=false&community_data=false&developer_data=false`
  );
  const crypto = await res.json();

  return {
    props: {
      crypto,
    },
  };
}
