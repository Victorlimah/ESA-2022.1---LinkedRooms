import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 2rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 500px;
  height: 100%;
  background-color: blue;
  border-radius: 10px;
  padding: 2rem;
`;

export const Select = styled.select`
  width: 100%;
  height: 3rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 0 1rem;
  font-size: 1rem;
  color: green;
  background-color: red;
`;

export const Input = styled.input`
  width: 100%;
  height: 3rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 0 1rem;
  font-size: 1rem;
  color: #fff;
`;

export const Button = styled.button`
  width: 100%;
  height: 3rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 0 1rem;
  font-size: 1rem;
  color: blue;
  background-color: #f5f5f5;
  cursor: pointer;
`;


