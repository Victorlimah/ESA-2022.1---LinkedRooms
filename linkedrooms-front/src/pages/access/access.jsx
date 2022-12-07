import { useState } from "react";
import axios from "axios";
import * as S from "./style";
import { Navigate, useNavigate } from "react-router-dom";

export default function Access() {
  const URL = "http://localhost:5000/authentication";
  const navigate = useNavigate();
  const [code, setCode] = useState({
    code: ""
  });


  return (
    <S.Container>
      <S.Form onSubmit={ submit }>
      <h1>Insira o seu código de acesso enviado para o seu email dcx no campo abaixo!</h1>
        <S.Input
            id="code"
            type="code"
            name="code"
            placeholder="Insira o seu código de acesso"
            onChange={e => setCode({ code: e.target.value })}
        />
        <S.Button type="submit">
          Enviar
        </S.Button>
      </S.Form>
    </S.Container>
  );

  function submit(event) {
    event.preventDefault();
    axios
        .get(URL, code)
        .then(() => {
          navigate("/");
        })
        .catch((error) => console.log(error));
  }
}