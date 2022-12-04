import styled  from "styled-components";

export const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  thead{
    background-color: #003B8E;
  }

  table svg {
    cursor: pointer;
    font-size: 1.5rem;
  }

  .header{
    width: 50px;
    text-align: center;
  }

  .id{
    width: 40px;
  }
`;

export const Header = styled.header`
  width: 900px;
  height: 80px;
  padding: 30px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  font-family: "Nunito sans", sans-serif;
`;

export const AddButton = styled.button`
  padding: 10px 25px;
  background: #003B8E;
  border-radius: 10px;
  border: none;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: #002D6C;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: black;
`;

export const Table = styled.table`
  width: 70%;
  border-collapse: collapse;
  border: 1px solid black;
  margin-top: 20px;
`;

export const TableHead = styled.th`
  border: 1px solid black;
  padding: 10px;
  font-size: 1.2rem;
  font-weight: bold;
`;

export const TableRow = styled.tr`
  border: 1px solid black;
`;

export const TableHeadCell = styled.th`
  border: 1px solid black;
  padding: 10px;
  font-size: 1.2rem;
  font-weight: bold;
`;

export const TableBody = styled.tbody`
  border: 1px solid black;
`;

export const TableCell = styled.td`
  border: 1px solid black;
  padding: 10px;
  font-size: 1.2rem;
`;

export const Button = styled.button`
  background-color: #f5f5f5;
  border: 1px solid black;
  border-radius: 5px;
  padding: 5px;
  font-size: 1rem;
  cursor: pointer;
  color: black;

  &:hover {
    background-color: #e0e0e0;
    transform: scale(1.05);
  }
`;