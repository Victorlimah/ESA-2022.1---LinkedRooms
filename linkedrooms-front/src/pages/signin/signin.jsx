import * as S from "./styles";
import {  useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function SignIn() {
  const URL = "http://localhost:5000/signin";
  const [email, setEmail] = useState("");
  const [ token, setToken ] = useState("");
  const navigate = useNavigate();  

  return (
    <S.Container>
      <h1>LinkedRooms</h1>
      <S.Box>
        <S.Header>
          <h1>Login</h1>
        </S.Header>
        
        <S.Form onSubmit={ submit }>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Digite seu email dcx"
            onChange={e => setEmail(e.target.value)}
          />
          <input 
            id="password"
            type="password"
            name="password"
            placeholder="Digite sua senha" 
          />
          <S.Button type="submit">
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
        .get(URL, { email })
        .then((res) => {
            setToken(res.data);
            localStorage.setItem("token", token);
            navigate("/dashboard");
        })
        .catch((error) => console.log(error));
  }
}