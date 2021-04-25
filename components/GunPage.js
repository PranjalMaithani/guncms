import { urlFor } from '../utils/sanity';
import styled from 'styled-components';
import Tag from './Tag';

const PageDiv = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 30px;
  border-radius: 4px;
  background-color: white;
  padding: 24px 36px;
  box-shadow: 2px 4px 20px rgba(0, 0, 0, 0.05);
`;

const FullImage = styled.img`
  object-fit: contain;
  border-radius: 2px;
`;

const CaliberImage = styled.img`
  object-fit: contain;
  border-radius: 4px;
`;

const DetailsDiv = styled.div``;

const GunPage = ({ gun }) => {
  if (!gun) {
    return <p>Loading Gun...</p>;
  }
  const { name, country, image, year, category, caliber } = gun;
  return (
    <PageDiv>
      <FullImage src={`${urlFor(image).auto('format').fit('min').width(1000).url()}`} />
      <DetailsDiv>
        {name && <h2>{name}</h2>}
        {category.action.map((type, index) => (
          <Tag name={type} key={index} />
        ))}
        {category && category.type && <Tag name={category.type} />}
        <h4>
          {country && country.name} {year.slice(0, 4)}
        </h4>
        <h4>{caliber && caliber.name}</h4>
        {caliber && caliber.image && (
          <CaliberImage
            src={`${urlFor(caliber.image).auto('format').fit('clip').height(200).url()}`}
          />
        )}
      </DetailsDiv>
    </PageDiv>
  );
};

export default GunPage;
