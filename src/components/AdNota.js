import '../App.css'
import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function AdNota({ onSaveNota }) {

    const [nota, setNota] = useState({
        titulo: '',
        tituloText: false,
        conteudo: '',
        conteudoText: false,
        data: new Date().toLocaleString(),
    });
    const handleTituloChange = (event) => {
        setNota({ ...nota, titulo: event.target.value, tituloText: true });
    };
    const handleConteudoChange = (event) => {
        setNota({ ...nota, conteudo: event.target.value, conteudoText: true });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        onSaveNota(nota); // Chama a função onSaveNota passada como propriedade com a nova nota
        setNota({ titulo: '', conteudo: '', data: new Date().toLocaleString() });
    };

    return (
        <div className="adicionarNota">
            <Link to="/" className='link-decoration'>Voltar</Link>
            <form onSubmit={handleSubmit}>
                <label htmlFor="titulo">Titulo</label>
                <input id="titulo" className='' value={nota.titulo} onChange={handleTituloChange} />
                <label htmlFor="conteudo">Conteudo</label>
                <textarea id="conteudo" className='' value={nota.conteudo} onChange={handleConteudoChange} />
                <button type='submit' disabled={!nota.titulo || !nota.conteudo}>Guardar</button>
            </form>
        </div>
    )
}

export default AdNota;