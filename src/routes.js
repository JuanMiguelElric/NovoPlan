import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Agradecimento from "./componetsimp/paginas/Agradecimento";
import ComoFunciona from "./screens/ComoFunciona";
import PrimaryPage from "./paginaprincipal/Home";
import BlogsComponet from "./screens/Blogs.jS";
import Contato from "./paginaprincipal/paginacontato/pagecontato";
import Autenticacao from "./componetsimp/autenticacao";


function Rota() {
  const {autenticado} =Autenticacao();

  return (
    <BrowserRouter>
      <Routes>

        <Route exact path="/" element={<PrimaryPage />} / >
        {autenticado ? (
          <Route path="/agradecimento" element={<Agradecimento />} />
        ) : (
          // Aqui você pode renderizar uma página de login ou redirecionar o usuário para outra rota pública
          <Route path="/*" element={<PrimaryPage />} />
        )}
      

        <Route exact path="/Contato" element={<Contato />} />
        <Route exact path="/ComoFunciona" element={<ComoFunciona />} />
        <Route exact path="/Blog" element={<BlogsComponet />} />
      </Routes> 
    </BrowserRouter>
  );
}

export default Rota;
