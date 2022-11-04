import Display from '../../assets/ra106.png';

import styled from 'styled-components';

export default function Room() {
  
  const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
  `;
  
  return (
    <div>
      <Image src={Display} alt="Display" />
    </div>
  );
}
