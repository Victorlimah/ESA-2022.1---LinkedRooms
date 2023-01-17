import styled from "styled-components"

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #1565c0;
;

  > h1 {
    font-size: 80px;
    font-weight: 700;
    color: #FFFFFF;
    margin-bottom: 80px;
    top: 20px;
  }

  #sigma {
    font-size: 70px;
    color: #FFFFFF;
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

  #email {
    border: none;
    font-size: 19px;
    border-radius: 10px;
    box-sizing: border-box;
    padding-left: 10px;
    background-color: #F8F9FA;

    ::placeholder {
      margin-right: 10px;
      font-size: 19px;
    }

    :focus {
      box-shadow: 0 0 0 0;
      outline: 0;
    }
  }

  #password {
    border: none;
    font-size: 19px;
    border-radius: 10px;
    box-sizing: border-box;
    padding-left: 10px;
    background-color: #F8F9FA;

    ::placeholder {
      margin-right: 10px;
      font-size: 19px;
    }

    :focus {
      box-shadow: 0 0 0 0;
      outline: 0;
    }
  }
`;

export const Button = styled.button`
  height: 75px;
  width: 100%;
  color: #1565c0;
  border-color: #1565c0;
  border: solid 1px;
  background-color: white;
  border-radius: 20px;
  cursor: pointer;
  margin-top: 30px;
  font-size: 18px;
  font-weight: 500;

  :hover {
    background-color: #1565c0;
    color: white;
  }
`;

export const Box = styled.div`
  border-radius: 10px;
  height: 580px;
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
`;

export const FHeader = styled.div`
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

export const Header = styled.div`
  background-color: #1565c0;

  h1 {
    font-size: 80px;
    font-weight: 600;
    color: white; 
  }
`;

export const ErrorMessage = styled.h2`
   display: ${props => props.display};
   color: red;
   font-size: 18px;
`;