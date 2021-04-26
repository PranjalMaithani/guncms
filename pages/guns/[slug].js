import GunPage from '../../components/GunPage';
import { getClient, usePreviewSubscription } from '../../utils/sanity';
import { groq } from 'next-sanity';
import Error from 'next/error';

const query = groq`*[_type == "gun" && slug.current == $slug][0]{..., country->, caliber->}`;

const Gun = ({ gunData, preview, slug }) => {
  const { data: liveData } = usePreviewSubscription(query, {
    params: { slug },
    initialData: gunData,
    enabled: preview,
  });

  if (!gunData?.slug) {
    return <Error statusCode={404} />;
  }

  if (liveData.loading) {
    return <p>Loading Gun...</p>;
  }

  return (
    <>
      {preview && <i>Preview mode</i>}
      <GunPage gun={liveData} />
    </>
  );
};

export async function getStaticProps({ params, preview = false }) {
  const slug = params.slug.toLowerCase();
  const gunData = await getClient(preview).fetch(query, { slug });
  return {
    props: { preview, gunData, slug: params.slug },
  };
}

export async function getStaticPaths() {
  const paths = await getClient().fetch(
    `*[_type == "gun" && defined(slug.current)].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export default Gun;
