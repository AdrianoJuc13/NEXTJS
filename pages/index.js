import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
// import useSWR from 'swr';
import { useState } from "react";

//fetching data from static
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
// //fetching data from server-side
// export async function getServerSideProps(context) {
//   return {
//     props: {
//       // props for your component
//     },
//   };
// }

// //fetching data on client side with SWR https://swr.vercel.app/

// function Profile() {
//   const { data, error } = useSWR('/api/user', fetch);

//   if (error) return <div>failed to load</div>;
//   if (!data) return <div>loading...</div>;
//   return <div>hello {data.name}!</div>;
// }

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <p>
          {`Pentru noi, etic înseamna durabil. Activitatea noastră se desfășoară 
          sub semnul integritații, al corectitudinii, al respectului și al simțului de răspundere. 
          Reputația este determinată de actiunile fiecăruia dintre noi în parte, de aderarea la standardele 
          și valorile companiei, în fiecare zi, cu fiecare colaborare! `}
          <br />
          {`
          (PRIMAGRA ROMANIA-Cod de etică si conduita în afaceri)`}
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <Link href={`/homepage`}>
          <a>Homepage</a>
        </Link>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>

              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
