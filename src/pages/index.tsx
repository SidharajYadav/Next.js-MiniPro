import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/Layout";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout title="Homepage">
      <h1>Software develper - Siddharaj Yadav</h1>
    </Layout>
  );
}
