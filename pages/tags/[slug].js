import slugify from 'slugify';

import { getClient } from '../../utils/sanity';
import { useRouter } from 'next/router';
import GunsGrid from '../../components/GunsPage';

const TagPage = ({ data }) => {
  const router = useRouter();
  let title = null;
  if (router && router.query.slug) {
    title = router.query.slug.replace(/-/g, ' ');
  }

  return (
    <>
      {title && <h2>{title}</h2>}
      <GunsGrid guns={data} />
    </>
  );
};

export async function getStaticProps({ params, preview = false }) {
  const data = await getClient(preview).fetch(
    `*[_type == "gun" && "${params.slug}" in category.slugs]`
  );
  return {
    props: {
      data,
    },
  };
}

export async function getStaticPaths() {
  const categories = await getClient().fetch(
    `*[_type == "gun" && defined(slug.current)].category`
  );

  const tags = new Set();

  categories.forEach((category) => {
    category.action.forEach((action) => {
      tags.add(action);
    });
    tags.add(category.type);
  });

  const tagSlugs = Array.from(tags).map((tag) => slugify(tag, { lower: true }));

  return {
    paths: tagSlugs.map((slug) => ({
      params: { slug },
    })),
    fallback: 'blocking',
  };
}

export default TagPage;
