import { urlFor } from '../utils/sanity';
import Link from 'next/link';
import styled from 'styled-components';

import Tag from './Tag';

const CardDiv = styled.div`
  display: flex;
`;

const CardImage = styled.div`
  width: 300px;
  height: 300px;
  background-repeat: no-repeat;
`;

const GunCard = ({ gun }) => {
  const { name, country, image, year, category, slug } = gun;
  const productLink = `/guns/${slug.current}`;
  return (
    <CardDiv>
      <Link href={productLink}>
        <a>
          <CardImage
            style={{
              backgroundImage: `url('${urlFor(image)
                .auto('format')
                .fit('crop')
                .width(300)
                .height(300)
                .quality(80)
                .url()}')`,
            }}
          ></CardImage>
        </a>
      </Link>
      <div>
        <Link href={productLink}>
          <a>
            <h3>{name}</h3>
          </a>
        </Link>
        {category.action.map((type, index) => (
          <Tag name={type} key={index} />
        ))}
        {category && category.type && <Tag name={category.type} />}
        <h4>
          {country && country.name} {year.slice(0, 4)}
        </h4>
      </div>
    </CardDiv>
  );
};

export default GunCard;
