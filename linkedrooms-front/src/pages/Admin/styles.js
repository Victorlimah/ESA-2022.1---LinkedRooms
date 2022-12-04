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
  color: black;
`;

export const Cards = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Card = styled.div`
  width: 200px;
  height: 200px;
  background-color: #f5f5f5;
  border-radius: 10px;
  flex-direction: column;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: black;
  cursor: pointer;

  &:hover {
    background-color: #e0e0e0;
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

