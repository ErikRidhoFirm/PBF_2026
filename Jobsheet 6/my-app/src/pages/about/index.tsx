import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <h1>Perkenalkan!</h1> <br />
      <p>Nama : Erik Ridho Firmansyah</p>
      <p>NIM : 2341720031</p>
      <p>Program Studi : Teknik Informatika</p>
    </div>
  );
}
