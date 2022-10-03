import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";

export default function homepage() {
  return (
    <Layout>
      <Head>
        <title>{'NEXT'}</title>
      </Head>
      <div>
        <Link href={'/'}>
          <h1>Back </h1>
        </Link>
      </div>
    </Layout>
  );
}
