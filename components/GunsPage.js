import styled from 'styled-components';
import GunCard from './GunCard';

const GunsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  width: 80vw;
  gap: 24px;
`;

const GunsPage = ({ guns }) => {
  if (!guns) {
    return <p>Loading Guns...</p>;
  }
  return (
    <GunsGrid>
      {guns.map((gun) => (
        <GunCard gun={gun} key={gun._id} />
      ))}
    </GunsGrid>
  );
};

export default GunsPage;
