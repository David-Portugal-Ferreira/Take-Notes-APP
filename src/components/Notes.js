import '../App.css'
import React from 'react';
import { Link } from "react-router-dom";

const MAX_CHARACTERS = 20; // Define o número máximo de caracteres a serem exibidos

const truncateContent = (content) => {
    if (content.length > MAX_CHARACTERS) {
        // Se o comprimento do conteúdo for maior que o máximo permitido...
        return content.substring(0, MAX_CHARACTERS) + '...'; // substring - retorna uma parte do texto de uma string (inicio, fim)
        // ... retorna apenas os primeiros MAX_CHARACTERS caracteres do conteúdo, seguidos por '...'
    }
    return content;
};

function Notes({ notas }) {
    return (
        <div className="display-notes">
            <Link to="/adNota" className='link-decoration'>Adicionar Nota</Link>
            {notas.map((nota, index) => (
                <div key={index} className='individual-notes'>
                    <h3>{truncateContent(nota.titulo)}</h3>
                    <p>{truncateContent(nota.conteudo)}</p>
                    <p>{nota.data}</p>
                    <Link to={`/verNota/${index}`} className='link-decoration'>Ver mais</Link>
                </div>
            ))}
        </div>
    )
}

export default Notes;