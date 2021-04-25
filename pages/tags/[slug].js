import slugify from 'slugify';

import { getClient, usePreviewSubscription } from '../../utils/sanity';
import { useRouter } from 'next/router';
import GunsGrid from '../../components/GunsPage';
import groq from 'groq';

const query = groq`*[_type == "gun" && $slug in category.slugs]`;

const TagPage = ({ gunData, preview, slug }) => {
  const router = useRouter();
  let title = null;
  if (router && router.query.slug) {
    title = router.query.slug.replace(/-/g, ' ');
  }

  const { data: liveData } = usePreviewSubscription(query, {
    params: { slug },
    initialData: gunData,
    enabled: preview,
  });

  return (
    <>
      {title && <h2>{title}</h2>}
      <GunsGrid guns={liveData} />
    </>
  );
};

export async function getStaticProps({ params, preview = false }) {
  const gunData = await getClient(preview).fetch(query, {
    slug: params.slug,
  });
  return {
    props: {
      gunData,
      preview,
      slug: params.slug,
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
