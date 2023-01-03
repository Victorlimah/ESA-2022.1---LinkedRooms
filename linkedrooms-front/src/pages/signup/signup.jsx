import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";
import axios from "axios";

export default function SignUp() {
  const URL = "http://localhost:5000/signup";
  const navigate = useNavigate();
  const [ user, setUser ] = useState({
    email: ""
  });


  return (
    <S.Container>
      <h1>LinkedRooms</h1>
      <S.Form onSubmit={ submit }>
        <S.Input
          id="email"
          type="email"
          name="email"
          placeholder="Insira seu email dcx"
          onChange={e => setUser({ email: e.target.value })}
        />
        <S.Button type="submit">
          Increver-se
        </S.Button>
      </S.Form>
      <h2 onClick={ () => navigate("/") }>
        Já registrou se email? Clique aqui!
      </h2>
    </S.Container>
  );

  function submit(event) {
    event.preventDefault();
  
    axios
        .post(URL, user)
        .then(() => {
          navigate("/authentication");
        })
        .catch((error) => console.log(error));
  }
}