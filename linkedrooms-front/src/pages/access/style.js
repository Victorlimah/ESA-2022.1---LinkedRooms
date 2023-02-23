import styled from "styled-components"

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(63deg, rgba(0,198,251,1) 35%, rgba(0,91,234,1) 100%);
`;

export const Form = styled.form`
  width: 40rem;
  height: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  #OTPInput {
    height: 5rem;
    width: 5rem;
    border-radius: 5px ;
    border: none;
    font-size: 3rem;
    background-color: white;
    display: flex;
    justify-content: center;
    text-align: center;
    
    ::-webkit-inner-spin-button {
      display: none;
    }
  }

  button {
    border: solid 0.1rem;
    height: 3rem;
    width: 10rem;
    border-radius: 5px;
    background-color: transparent;
    color: #1565c0;
    border-color: #1565c0;
    cursor: pointer;
  }
`;

export const Box = styled.div`
  display: flex;
  justify-content: space-between; 
  width: 100%;
`;

export const Header = styled.div`
  height: 6rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 2rem;
  }
`;  