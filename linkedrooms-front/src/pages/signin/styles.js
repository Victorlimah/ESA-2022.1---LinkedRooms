import styled from "styled-components"

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #1565c0;

  > h1 {
    font-size: 35px;
    font-weight: 700;
    color: #FFFFFF;
    margin-bottom: 80px;
    top: 20px;
  }

  > h2 {
    cursor: pointer;
  }
`

export const Form = styled.form` 
  width: 400px;
  height: 50%;
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
  height: 75px;
  width: 100%;
  color: white;
  background-color: #1565c0;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  margin-top: 30px;
  font-size: 18px;
  font-weight: 500;
`;

export const Box = styled.div`
  background-color: #FFFFFF;
  border-radius: 10px;
  height: 580px;
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.div`
  height: 25%;
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  h1 {
    font-size: 30px;
    font-family: 'Nunito Sans', sans-serif;
  }
`;

export const Footer = styled.div`
  height: 15%;
  display: flex;
  align-items: center;
  h2 {
    color: #1565c0;
    font-size: 17px;
    font-weight: 500;
    cursor: pointer;
  }

`;