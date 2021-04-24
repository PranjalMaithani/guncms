import GunPage from '../../components/GunPage';
import { getClient } from '../../utils/sanity';

const Gun = ({ data }) => {
  return <GunPage gun={data} />;
};

export async function getStaticProps({ params, preview = false }) {
  const data = await getClient(preview).fetch(
    `*[_type == "gun" && slug.current == '${params.slug.toLowerCase()}'][0]{..., country->, caliber->}`
  );

  return {
    props: { preview, data },
  };
}

export async function getStaticPaths() {
  const paths = await getClient().fetch(
    `*[_type == "gun" && defined(slug.current)].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: 'blocking',
  };
}

export default Gun;
