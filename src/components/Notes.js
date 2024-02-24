import React from 'react';
import { Link } from "react-router-dom";

function Notes({ notas }) {
    return (
        <div className="display-notes">
            <Link to="/adNota" className='link-decoration'>Adicionar Nota</Link>    
            {notas.map((nota, index) => (
                <div key={index}>
                    <h3>{nota.titulo}</h3>
                    <p>{nota.conteudo}</p>
                    <p>{nota.data}</p>
                </div>
            ))}
        </div>
    )
}

export default Notes;