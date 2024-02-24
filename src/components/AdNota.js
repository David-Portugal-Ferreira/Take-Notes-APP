import '../App.css'
import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function AdNota({ onSaveNota }) {

    const [nota, setNota] = useState({
        titulo: '',
        conteudo: '',
        data: new Date().toLocaleString(),
    });

    const handleTituloChange = (event) => {
        setNota({ ...nota, titulo: event.target.value });
    };

    const handleConteudoChange = (event) => {
        setNota({ ...nota, conteudo: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSaveNota(nota); // Chama a função onSaveNota passada como propriedade com a nova nota
        setNota({ titulo: '', conteudo: '', data: new Date().toLocaleString() });
    };

    return (
        <div className="adicionarNota">
            <h1>Titulo</h1><input className='titulo' value={nota.titulo} onChange={handleTituloChange} />
            <h2>Nota</h2><input className='conteudo' value={nota.conteudo} onChange={handleConteudoChange} />

            <button onClick={handleSubmit}>Guardar</button>

            <Link to="/" className='link-decoration'>Voltar</Link>
        </div>
    )
}

export default AdNota;