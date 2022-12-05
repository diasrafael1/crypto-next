import { GetServerSidePropsContext } from "next";
import Head from "next/head";
import Image from "next/image";
import { ICrypto } from "../../@types/ICrypto";
import DateHistory from "../../components/DateHistory";
import MarketInfos from "../../components/MarketInfos";

interface Prop {
  crypto: ICrypto;
}

export default function Cryptocurrency({ crypto }: Prop) {
  return (
    <>
      <Head>
        <title>{crypto.name} | CryptoNext</title>
      </Head>

      <main className="px-20 py-4">
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
        <MarketInfos crypto={crypto} />
        <DateHistory cryptoId={crypto.id} />
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
