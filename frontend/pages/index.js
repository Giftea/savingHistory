import Features from "../components/Features";
import FuturePlan from "../components/HomePage/Future-Plan";
import Hero from "../components/HomePage/Hero";
import Newsletter from "../components/Newsletter";
import Stats from "../components/HomePage/Stats";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>My page title</title>
        <meta
          name="google-site-verification"
          content="FGJ87XW5Z_6lcaNtmrbiwNTUo53Sdx-u-j7wyP-3j3M"
        />
      </Head>
      <Hero />
      <Features />
      <Stats />
      <FuturePlan />
      <Newsletter />
    </>
  );
}
