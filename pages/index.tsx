import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>CryptoNext</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-screen flex items-center p-36 bg-gray-800">
        <section>
          <h1 className="font-bold text-4xl text-white">CryptoNext</h1>
          <p className="text-2xl text-white">
            Tudo sobre <span className="text-orange-400">criptomoedas</span> num
            só lugar!
          </p>
        </section>
      </main>
    </div>
  );
}
