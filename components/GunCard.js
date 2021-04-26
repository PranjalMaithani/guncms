import { urlFor } from '../utils/sanity';
import Link from 'next/link';
import styled from 'styled-components';

import Tag from './Tag';

const CardDiv = styled.div`
  display: flex;
  border-radius: 4px;
  background-color: white;

  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.1);

  transition: 0.1s;
  position: relative;

  &:hover {
    box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 765px) {
    max-width: 80vw;
    padding: 15px 10px;
  }
`;

const CardImage = styled.div`
  width: 300px;
  height: 300px;
  background-repeat: no-repeat;
  border-radius: 4px 0 0 4px;

  background-size: contain;
  @media (max-width: 765px) {
    width: 150px;
    height: 150px;
  }
`;

const FlagImage = styled.img`
  position: absolute;
  top: 15px;
  right: 15px;

  @media (max-width: 765px) {
    width: 40px;
  }
`;

const CardDetails = styled.div`
  margin-left: 15px;
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
      <CardDetails>
        {country && (
          <FlagImage
            src={urlFor(country.flag).auto('format').width(60).quality(50).url()}
          ></FlagImage>
        )}
        <Link href={productLink}>
          <a>
            <h2>{name}</h2>
          </a>
        </Link>

        <h4>
          {country && country.name} {year.slice(0, 4)}
        </h4>

        {category && category.type && <Tag name={category.type} />}
        {category.action.map((type, index) => (
          <Tag name={type} key={index} />
        ))}
      </CardDetails>
    </CardDiv>
  );
};

export default GunCard;
