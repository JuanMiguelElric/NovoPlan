import  { useState } from "react";
import { useNavigate } from "react-router-dom";




const Autenticacao = () => {
  const [autenticado, setAutenticado] = useState(false);
  const navigate = useNavigate();

  

  // Função para fazer login do usuário

  const fazerLogin = () => {
    setAutenticado(true);
    navigate("/agradecimento"); // Redirecione para a rota de agradecimento após o login
  };

  // Função para fazer logout do usuário
  const fazerLogout = () => {  
    setAutenticado(false);
    navigate("/"); // Redirecione para a rota inicial após o logout
  };

  return { autenticado, fazerLogin, fazerLogout };
};

export default Autenticacao;
