import React from 'react';
import ShowCard from '../showCard';
import { Show } from '../../interfaces';
import { StyledListContainer } from '../../gloablStyles';

const ShowList: React.FC<{ items: Show[] }> = ({ items }) => {
  return (
    <StyledListContainer>
      {items?.map((item) => (
        <ShowCard show={item} key={`${item?.id?.toString()}-${item?.name}`} />
      ))}
    </StyledListContainer>
  );
};

export default ShowList;
