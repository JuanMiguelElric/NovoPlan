import React, { useState } from "react";
import Autenticacao from "./autenticacao";

const Formulario = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const autentico = Autenticacao();

  const camponome = (event) => {
    const valorNome = event.target.value;
    setNome(valorNome);
  };

  const campoemail = (event) => {
    const valorEmail = event.target.value;
    setEmail(valorEmail);
  };

  const enviofor = (event) => {
    event.preventDefault();

    if (nome === "") {
      alert("Por favor, preencha seu nome.");
    } else if (email === "") {
      alert("Por favor, digite seu email.");
    } else {
      autentico.fazerLogin();
    }
  };

  return (
    <div className="enviofor">
      <form onSubmit={enviofor}>
        <label>
          Nome: <br />
          <input type="text" value={nome} onChange={camponome} placeholder="nome" />
        </label>
        <br />
        <label>
          Email: <br />
          <input type="email" value={email} onChange={campoemail} placeholder="email" />
        </label>
        <br />
        <button className="submit" type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Formulario;
