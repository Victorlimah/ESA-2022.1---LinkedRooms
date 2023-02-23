import * as S from "../signin/styles";
import {  useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext, AppProvider } from "../../providers/AppContext";

export default function SignIn() {
  const URL = "http://localhost:5000/signin";
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    confirmPassword: ""
  });
  const { setNewUser } = useContext(AppContext);
  const navigate = useNavigate();  
  const [display, setDisplay] = useState("none");

  return (
    <S.Container>
      <S.Box>
        <S.FHeader>
          <h1>Cadastro</h1>
        </S.FHeader>   
        <S.Form onSubmit={ submit }>
          <input
            id="email"
            type="email"
            name="input"
            placeholder="Digite seu email dcx"
            onChange={ e => 
              setUserData({ ...userData, email: e.target.value }) 
            }
          />
          <input 
            id="password"
            type="password"
            name="input"
            minLength='6'
            placeholder="Digite sua senha" 
            onChange={ e => 
              setUserData({ ...userData, password: e.target.value })
            }
          />
          <input 
            id="confirmPassword"
            type="password"
            name="input"
            minLength='6'
            placeholder="Digite novamente a sua senha" 
            onChange={ e => 
              setUserData({ ...userData, confirmPassword: e.target.value })
            }
          />
          <S.ErrorMessage display={display} >{`As senhas inseridas são diferentes!`}</S.ErrorMessage>
          <S.Button type="submit" on>
            ENTRAR
          </S.Button>
        </S.Form>
        <S.Footer>
          <h2 onClick={ () => navigate("/") }>
            Já possui uma conta? Clique aqui!
          </h2>
        </S.Footer>
      </S.Box>
    </S.Container>
  );
  function submit(event) {
    event.preventDefault();
    if (userData.password === userData.confirmPassword) {
      setNewUser(userData);
      navigate("/authentication");
    } else {
      setDisplay("initial");
    }
  }
}