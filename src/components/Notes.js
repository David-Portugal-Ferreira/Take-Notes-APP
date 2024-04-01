import '../App.css'
import React from 'react';
import { Link } from "react-router-dom";

const MAX_CHARACTERS = 35; // Define o número máximo de caracteres a serem exibidos

const truncateContent = (content) => {
    if (content.length > MAX_CHARACTERS) {
        // Se o comprimento do conteúdo for maior que o máximo permitido...
        return content.substring(0, MAX_CHARACTERS) + '...'; // substring - retorna uma parte do texto de uma string (inicio, fim)
        // ... retorna apenas os primeiros MAX_CHARACTERS caracteres do conteúdo, seguidos por '...'
    }
    return content;
};

const eleminarNota = (index, setNotasDoUtilizador) => {
    // Obter notas do localStorage
    const notasComp = JSON.parse(localStorage.getItem("to_dos"));
    // Filtrar as notas para remover a nota com o índice correspondente
    const novasNotas = notasComp.filter((nota, i) => i !== index);
    // Atualizar o localStorage com as notas filtradas
    localStorage.setItem("to_dos", JSON.stringify(novasNotas));
    // Atualizar o estado ou recarregar a página, dependendo do seu fluxo de aplicativo
    // Exemplo de atualização do estado se você estiver usando React Hooks
    setNotasDoUtilizador(novasNotas); // Supondo que você tenha um estado chamado 'notas' para armazenar as notas
};

function Notes({ notas, setNotasDoUtilizador }) {
    return (
        <div className="display-notes">
            <Link to="/adNota" className='link-decoration'>Adicionar Nota</Link>
            {notas.map((nota, index) => (
                <div key={index} className='individual-notes'>
                    <h3>{truncateContent(nota.titulo)}</h3>
                    <p>{truncateContent(nota.conteudo)}</p>
                    <p>{nota.data}</p>
                    <Link to={`/verNota/${index}`} className='link-decoration'>Ver mais</Link>
                    <button onClick={() => eleminarNota(index, setNotasDoUtilizador)}>Eliminar</button> {/* Passa o índice para a função eleminarNota */}
                </div>
            ))}
        </div>
    );
};

export default Notes;