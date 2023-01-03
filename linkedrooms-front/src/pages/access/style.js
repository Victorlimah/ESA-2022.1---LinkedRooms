import styled from "styled-components"

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > h1 {
    font-size: 25px;
  }

`

export const Form = styled.form` 
  width: 500px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const Input = styled.input`
    height: 30px;
    width: 400px; 
    border-radius: 10px;
    border: none;
    background-color: #f8f8f8;
    
    :focus {
      border: none;
    }
   
`;

export const Button = styled.button`
  height: 40px;
  width: 50%;
  color: white;
  background-color: #1565c0;
  border: none;
  border-radius: 20px;
  cursor: pointer;
`;