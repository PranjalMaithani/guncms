import Link from 'next/link';
import slugify from 'slugify';
import styled from 'styled-components';

const TagDiv = styled.button`
  outline: none;
  border-style: none;
  border-radius: 4px;
  background-color: rgb(240, 240, 240);
  margin-right: 10px;
  padding: 5px;
  cursor: pointer;

  &:hover {
    background-color: rgb(230, 230, 230);
  }
`;

const Tag = ({ name }) => {
  const slug = slugify(name, { lower: true });
  return (
    <TagDiv>
      <Link href={`/tags/${slug}`}>
        <a>{name}</a>
      </Link>
    </TagDiv>
  );
};

export default Tag;
