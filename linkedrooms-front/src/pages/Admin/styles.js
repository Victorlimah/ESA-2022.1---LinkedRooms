import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin: 25px 0;
  color: #003B8E;
  font-weight: bold;
`;

export const Cards = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Card = styled.div`
  width: 200px;
  height: 200px;
  background-color: #003B8E;
  border-radius: 10px;
  flex-direction: column;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #1565c0;
    transform: scale(1.05);
  }
`;

export const CardTitle = styled.h2`
  font-size: 1.5rem;
`;

export const Icon = styled.div`
  font-size: 3rem;
  margin-bottom: 10px;
`;

