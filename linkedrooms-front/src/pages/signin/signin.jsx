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
      <S.Form onSubmit={ submit }>
        <S.Input
          id="email"
          type="email"
          name="email"
          placeholder="Insira seu email dcx"
          onChange={e => setEmail(e.target.value)}
        />
        <S.Button type="submit">
          Entrar
        </S.Button>
      </S.Form>
      <h2 onClick={ () => navigate("/signup") }>
        Ainda não registou seu email? Clique aqui!
      </h2>
    </S.Container>
  );
  function submit(event) {
    event.preventDefault();
  
    axios
        .get(URL, { email })
        .then((res) => {
            setToken(res.data);
            localStorage.setItem("token", token);
            console.log(token);
            navigate("/dashboard");
        })
        .catch((error) => console.log(error));
  }
}