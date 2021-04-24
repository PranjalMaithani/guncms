import { urlFor } from '../utils/sanity';
import styled from 'styled-components';
import Tag from './Tag';

const PageDiv = styled.div`
  display: flex;
`;

const FullImage = styled.img`
  object-fit: contain;
`;

const StatsDiv = styled.div``;

const GunPage = ({ gun }) => {
  if (!gun) {
    return <p>Loading Gun...</p>;
  }
  const { name, country, image, year, category, caliber } = gun;
  return (
    <PageDiv>
      <FullImage src={`${urlFor(image).auto('format').fit('min').width(1000).url()}`} />
      <div>
        {name && <h3>{name}</h3>}
        {category.action.map((type, index) => (
          <Tag name={type} key={index} />
        ))}
        {category && category.type && <Tag name={category.type} />}
        <h4>
          {country && country.name} {year.slice(0, 4)}
        </h4>
        <h4>{caliber && caliber.name}</h4>
        {caliber && caliber.image && (
          <FullImage
            src={`${urlFor(caliber.image).auto('format').fit('clip').height(200).url()}`}
          />
        )}
      </div>
    </PageDiv>
  );
};

export default GunPage;
