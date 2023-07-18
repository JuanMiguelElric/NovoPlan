import React from "react";
import "../App.css";
import page1 from "../imagens/page1.png"


import Menu from "../componetsimp/menu";


const ComoFunciona = () =>{
    return(
        <div >
            <Menu />
            <div className="Contato">
                <h2>Como Funciona</h2>
                <br/>
                <br />
                <p className="para"> Olá me Chamo Plan,ou como muitos me chamam Planejador de Tarefas. Eu fui desenvolvido para as pessoas criarem rotinas para alcançar suas metas. Sou quase um irmão de uma Agenda.. Mas sem muita conversa vamos direto ao ponto.</p>
                <p className="para">
O planejador de tarefas é uma ferramenta útil para organizar suas atividades diárias, priorizar tarefas e garantir que você esteja focado e produtivo. Aqui está um guia passo a passo sobre como o planejador de tarefas funciona:
                </p>
                <br />
                <br />
                <p className="para">O primeiro passo é deixar seus Dados.</p>
                <p className="para">.Nesta parte vai ser pedido seu nome e email, para futuramente O envio do mesmo para seu email.</p>
                <br />
                <br />
                <br />
                <img src={page1} className="imageinformation" alt="paginap-principal"/>
                <br />
                <br />
                <p> Segundo passo é preencher mais algumas informações</p>
                <p> Neste passo vou precisar apenas de umas breves informações sua,para te conhecer melhor. Como está escrito na imagem eu vou precisar saber sua profissão, quantas horas você dorme por dia, se  pratica uma atividade fisíca, Quantos dias você deseja planejar sua Rotina. e qual é seu hobbi.Tudo isto nós vamos utilizar para o desenvolvimento do seu planejamento de Rotina.</p>
                <br />
                <br />

                <img src={page1} className="imageinformation" alt="Pagina de informações" />

                <br />
                <br />
                < p > Terceiro passo vamos começar a montar seu planejamento numa aba você consegue visualizar como está ficando seu planejamento e na outra você vai preencher as informações que você deseja colocar no planejamento.</p>
                <p>. O primeiro tópico você deve informar por qual dia vamos começar seu planejamento, logo em seguida Você coloca seus o nome da tarefa e o hoário. e faz assim até preencher sua Rotina.</p>
                <br />
                <br />
                <img src={page1} className="imageinformation" alt="planejador"/>


    


            </div>
            

        </div>

    )
}
export default ComoFunciona;