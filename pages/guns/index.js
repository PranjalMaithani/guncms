import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import { getClient } from '../../utils/sanity';

import GunsPage from '../../components/GunsPage';

const allDataQuery = `*[_type == "gun" && defined(slug)]{
  _id, 
  name, 
  slug,
  country->, 
  image, 
  year, 
  category
}`;

export default function Home(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Guns CMS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>Guns List</h1>
        <GunsPage guns={props.guns} />
      </main>
    </div>
  );
}

export async function getStaticProps({ preview = false }) {
  const guns = await getClient(preview).fetch(allDataQuery);

  return {
    props: {
      guns,
    },
  };
}
