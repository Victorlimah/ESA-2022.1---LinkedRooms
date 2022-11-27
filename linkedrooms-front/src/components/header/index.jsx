import styled from 'styled-components';

export default function Header(){

  return(
    <Container>
      <Title>LinkedRooms</Title>
      <BackToHome>Back to Home</BackToHome>
    </Container>
  );
}

const Container = styled.header`
  width: 100vw;
  height: 80px;
  padding: 60px;
  background: #003B8E;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: 'Nunito sans', sans-serif;
`;

const Title = styled.h1`
color: #fff;
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 15px;
`;
const BackToHome = styled.span`
    font-size: 1.3rem;
    color: #fff;
    cursor: pointer;

    &:hover{
      text-decoration: underline;
    }
`;