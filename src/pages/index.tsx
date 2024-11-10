import Link from "next/link";
import localFont from "next/font/local";
import { Button } from "@mui/material";
import Head from "next/head";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
       <Head>
        <title>Página Inicial</title> {/* Aqui você define o título */}
      </Head>
      <h1 className="pb-5">Página Inicial</h1>
     <div className="flex space-x-2">
      <Link href="/produtos">
        <Button variant="contained">
          Ir para Produtos
        </Button>
      </Link>
      <Link href="/contato">
        <Button variant="contained">
          Ir para contato
        </Button>
      </Link>
     </div>
    </div>
  );
}
