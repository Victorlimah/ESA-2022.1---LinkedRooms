import * as S from "./styles";
import {  useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const URL = "http://localhost:5000/signin";
  const [userData, setUserData] = useState({
    email: "",
    password: ""
  });
  const [ token, setToken ] = useState("");
  const navigate = useNavigate();  
  const [display, setDisplay] = useState("none");

  return (
    <S.Container>
      <S.Box>
        <S.FHeader>
          <h1>Login</h1>
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
          <S.ErrorMessage display={display} >{`Email ou senha incorreto(a)!`}</S.ErrorMessage>
          <S.Button type="submit" on>
            ENTRAR
          </S.Button>
        </S.Form>
        <S.Footer>
          <h2 onClick={ () => navigate("/signup") }>
            Ainda não registou seu email? Clique aqui!
          </h2>
        </S.Footer>
      </S.Box>
    </S.Container>
  );
  function submit(event) {
    event.preventDefault();
  
    axios
        .post(URL, userData)
        .then((res) => {
            setToken(res.data);
            localStorage.setItem("token", token);
            navigate("/dashboard");
        })
        .catch((error) => {
          console.log(error)
          setDisplay("initial");
        });
  }
}