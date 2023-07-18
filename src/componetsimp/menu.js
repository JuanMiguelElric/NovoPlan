import React, {useState} from "react";
import { Link } from "react-router-dom";
import "../App.css";
import hamburguer from "../imagens/hamburguer.png";


function Menu(){
    const [menuVisivel, setMenuVisiviel] = useState(false);
    const hamburguertoogle= () =>{
        setMenuVisiviel(!menuVisivel);
    };
    return(
        <div className="menu">
            <ul>
                <li className="Afastar"> PLAN </li>
                <li className="Afastar"> Seja Bem vindo(a)</li>
                <li>
                    <Link to = "/ComoFunciona">Como Funciona </Link>
                </li>
                <li>
                    <Link to ="/Blogs">Blogs</Link>
                </li>
                <buton onClick={hamburguertoogle} ><img src={hamburguer} className="App-logo" alt="Hamburguer" /></buton>
                {menuVisivel && (
                    <div className="menu-bar">
                        {/*conteúdo do menu */}
                        <button className="botaotoogle" onClick={hamburguertoogle}><i class="fi fi-br-cross"></i></button>
                        <p>Entrar</p> <br/>
                        <p>Contato</p> <br/>
                        <p>Como Funciona!</p> <br />
                        <p>Desenvolvedor</p> <br/>
                        <p> Blogs</p>
                    </div>
                )}
            </ul>
        </div>
    );
}
export default Menu;