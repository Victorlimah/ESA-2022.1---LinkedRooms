import styled from "styled-components"

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > h1 {
    font-size: 60px;
    font-weight: 700;
    color: #1565c0;
    margin-bottom: 80px;
    top: 20px;
  }

  > h2 {
    cursor: pointer;
  }
`

export const Form = styled.form` 
  width: 400px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

`;

export const Input = styled.input`
    height: 50vh;
    width: 50%;
    background-color: grey;
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