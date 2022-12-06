import * as S from "./styles";
import { useState } from "react";

export default function SignIn() {
  const [email, setEmail] = useState("");
  
  return (
    <S.Container>
      <h1>LinkedRooms</h1>
      <S.Form>
        <S.Input
          id="email"
          type="email"
          name="email"
          placeholder="Insira seu email dcx"
          onChange={e => setEmail(e.target.value)}
        />
        <S.Button>
          Entrar
        </S.Button>
      </S.Form>
      <h2>Ainda não registou seu email? Clique aqui!</h2>
    </S.Container>
  );
}