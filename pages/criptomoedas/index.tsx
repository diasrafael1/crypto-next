import { GetServerSidePropsContext } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

interface Props {
  cryptos: [
    {
      id: string;
      symbol: string;
      name: string;
      image: string;
      current_price: number;
    }
  ];
  page: string;
}

export default function Cryptocurrency({ cryptos, page }: Props) {
  return (
    <>
      <Head>
        <title>Criptomoedas | CryptoNext</title>
      </Head>

      <main className="flex items-center justify-center flex-col py-10 px-36">
        <div className="flex items-center justify-center flex-wrap gap-5 cursor-pointer">
          {cryptos.map((crypto) => (
            <div
              key={crypto.id}
              className="flex items-center justify-center flex-col"
            >
              <h1>{crypto.name}</h1>
              <Image
                src={crypto.image}
                alt={crypto.name}
                width={32}
                height={32}
              />
              <p>
                Preço: R$ {crypto.current_price.toString().replace(".", ",")}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-4 flex gap-2">
          <Link
            href={`/criptomoedas?page=${page == "1" ? page : Number(page) - 1}`}
            className="py-1 px-2 border border-blue-500 rounded-3xl font-semibold hover:bg-blue-500 hover:text-white"
          >
            Anterior
          </Link>
          <Link
            href={`/criptomoedas?page=${Number(page) + 1}`}
            className="py-1 px-2 border border-blue-500 rounded-3xl font-semibold hover:bg-blue-500 hover:text-white"
          >
            Proximo
          </Link>
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { page } = context.query;
  const res = await fetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=brl&order=market_cap_desc&per_page=20&page=${page}&sparkline=false`
  );
  const cryptos = await res.json();

  return {
    props: {
      cryptos,
      page,
    },
  };
}
