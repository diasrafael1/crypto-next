import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "@next/font/google";
import Header from "../components/Header";

const inter = Inter({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inter.variable} font-inter`}>
      <Header />
      <Component {...pageProps} />
    </div>
  );
}
