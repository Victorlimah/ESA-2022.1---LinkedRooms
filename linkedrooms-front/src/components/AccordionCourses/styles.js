import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    margin: 10px auto 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .accordion{
      margin: 20px auto 0;
      background-color: #1565c0;
      color: white;
      width: 80%;

      svg{
        color: white;
      }
    }

    .MuiTypography-root{
      font-weight: bold;
      text-align: center;
      width: 100%;
    }

    .rooms{
      width: 55%;
      margin: 0 auto;
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;

      button{
        color: #1565c0;
        background-color: white;
        font-weight: bold;
        margin: 0 0 15px 10px;

        &:hover{
          background-color: #003B8E;
          color: white;
        }
      }
    }
    `;