import React, {useState} from "react";
import "../../App.css";
import Menu from "../../componetsimp/menu";
function Contato (){
    return(
        <div>
           <Menu />
           <div className="Contato">
            <h2>Entre Contato:</h2>
            <br/>
            <br />
            <p>Agradeços o seu interesse ao entrar em contato comigo. Estou feliz em ajudar e responder todas as suas perguntas, sugestões ou comentários. Por Favor, preencha o forumlário abaixo e entrarei em contato com você o meia breve possível:</p>
            <br/>
            <br/>
            <br/>
            <div className="Formulariopagecont">
                <form >
                    <input type="text" placeholder="Digite o seu nome:" />
                    <br />
                    <input type="email" placeholder="Digite o seu email" />
                    <br />
                    <textarea placeholder="Deixe sua mensagem:"  />
                    <br />
                    <button type="submit" className="submit">Enviar</button>
                    
                    
                </form>
            </div>
            <br />
            <p>Atenciosamente!!</p>
            <p>Plan</p>
           </div>
        </div>
    )
}
export default Contato;