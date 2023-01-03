import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  
  .hour{
    background-color: #1565c0;
  }

  .select{
    color: #003B8E;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #000;
  margin: 1rem 0;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-radius: 0.5rem;
  padding: 1rem;
`;

export const FormTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #000;
  margin-bottom: 1rem;
`;

export const FormSubtitle = styled.h2`
  font-size: 1.0rem;
  font-weight: 700;
  color: #000;
  margin-bottom: 1rem;
`;

export const FormContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 70%;
  height: 100%;
`;

export const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin-bottom: 1rem;
`;

export const Label = styled.label`
  font-size: 1rem;
  font-weight: 700;
  color: #000;
  margin-bottom: 0.5rem;
`;

export const DivSchedule = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 65%;
  height: 100%;
  background-color: #1565c0;
`;

export const HeaderSchedule = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #1565c0;
`;

export const HeaderScheduleItem = styled.div`
  display: flex;
  font-weight: bold;
  text-align: center;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0.8rem 0;
`;

export const Schedule = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const ScheduleItem = styled.div`
  display: flex;
  font-weight: bolder;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0.8rem 0;
  background-color: ${props => props.select ? '#003B8E' : '#1565c0'};
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.cancel ? '#ffffff' : '#1565c0'};
  color: ${props => props.cancel ? '#1565c0' :' #ffffff'};
  font-size: 1rem;
  font-weight: 700;
  border: none;
  border-radius: 0.5rem;
  margin-top: 1rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  padding: 0.5rem 1rem;

  &:hover, &:focus, &:active {
    background-color: #003B8E;
  }
`;

export const Cards = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin-bottom: 1rem;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  width: 30%;
  height: 130px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 15px 10px;
  padding: 10px;
  border-radius: 25px;
  background-color: #1565c0;
  color: #fff;

  :hover {
    background-color: #003B8E;
    transform: scale(1.05);
    transition: all 0.4s ease-in-out;
  }
`;

export const CardHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const CardText = styled.h1`
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
`;

export const CardTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
`;

export const CardSubtitle = styled.h1`
  font-size: 1.2rem;
  font-weight: bold;
  margin: 5px 0;
`;

export const CardBody = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  margin-top: 10px;
`;

export const CardButton = styled.button`
  transition: all 0.2s;
  background: none;
  border: none;
  font-size: 24px;
  font-weight: bold;
  margin: 0 12px;
  padding: 5px 15px;
  border-radius: 12px;
  cursor: pointer;
  color: ${props => props.cancel ? '#fff' : '#003B8E'} ;
  background-color: ${props => props.cancel ? '#003B8E' : '#fff'} ;

  &&:focus{
    background-color: #003B8E;
  }
`;

export const TitleModal = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  color: #003B8E;
`;

export const ModalBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 0 20px;
`;

export const SubtitleModal = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 15px 0 25px;
  color: #003B8E;
`;

export const ActionButton = styled.button`
  transition: all 0.2s;
  background: none;
  border: none;
  font-size: 24px;
  font-weight: bold;
  margin: 0 12px;
  padding: 5px 15px;
  border-radius: 12px;
  cursor: pointer;
  color: ${props => props.type !== 'cancel' ? '#fff' : '#003B8E'} ;
  background-color: ${props => props.type !== 'cancel' ? '#003B8E' : '#fff'} ;

  &&:focus, &&:hover, &&:active{
    background-color: ${props => props.type !== 'cancel' ? '#003B8E' : '#fff'} ;
  }
`;

export const EditButton = styled.button`
  transition: all 0.2s;
  background: none;
  border: none;
  font-size: 24px;
  font-weight: bold;
  margin: 0 12px;
  padding: 5px 15px;
  border-radius: 12px;
  cursor: pointer;

  &&:focus, &&:hover, &&:active{
    background: none;
  }
`;

export const Select = styled.select`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #003B8E;
  padding: 0 10px;
  margin: 10px 0;
  font-size: 1rem;
  font-weight: bold;
  color: #003B8E;
  background-color: red;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #003B8E;
  padding: 0 10px;
  margin: 10px 0;
  font-size: 1rem;
  font-weight: bold;
  color: #003B8E;
`;

