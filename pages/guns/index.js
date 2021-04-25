import Head from 'next/head';
import { getClient, usePreviewSubscription } from '../../utils/sanity';

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
  const { data: guns } = usePreviewSubscription(allDataQuery, {
    initialData: props.guns,
    enabled: props.preview,
  });

  return (
    <div>
      <Head>
        <title>Guns CMS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Guns List</h1>
        <GunsPage guns={guns} />
      </main>
    </div>
  );
}

export async function getStaticProps({ preview = false }) {
  const guns = await getClient(preview).fetch(allDataQuery);

  return {
    props: {
      guns,
      preview,
    },
  };
}
