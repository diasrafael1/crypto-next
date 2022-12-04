import Head from "next/head";
import Image from "next/image";

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
}

export default function Cryptocurrency({ cryptos }: Props) {
  return (
    <>
      <Head>
        <title>CryptoNext - Criptomoedas</title>
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
          <button className="py-1 px-2 border border-blue-500 rounded-3xl font-semibold hover:bg-blue-500 hover:text-white">
            Anterior
          </button>
          <button className="py-1 px-2 border border-blue-500 rounded-3xl font-semibold hover:bg-blue-500 hover:text-white">
            Proximo
          </button>
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=brl&order=market_cap_desc&per_page=20&page=1&sparkline=false"
  );
  const cryptos = await res.json();

  return {
    props: {
      cryptos,
    },
  };
}
