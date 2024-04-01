import '../App.css'
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom"

function VerNota({ nota }) {
    // Captura o parâmetro passado na URL (/verNota/:index)
    const { index } = useParams(); // Captura o índice da URL

    // Você pode carregar a nota correspondente com base no índice da URL
    const notaEspecifica = nota[parseInt(index)];

    console.log(notaEspecifica);

    // Renderiza os detalhes de notaEspecifica
    const titulo = notaEspecifica ? notaEspecifica.titulo : 'Titulo não encontrado';
    const conteudo = notaEspecifica ? notaEspecifica.conteudo : 'Não há conteúdo';
    const dataDeCriação = notaEspecifica ? notaEspecifica.data : 'Não há data';

    console.log(titulo) 
    console.log(conteudo) 
    console.log(dataDeCriação) 


    return (
        <div className="verNota">
            <Link to={"/"} className='link-decoration'><button>Voltar</button></Link>
            <div className='info'> <h2>{titulo}</h2> <h2>{dataDeCriação}</h2> </div>
            <div><p className='texto-vernota'>{conteudo}</p></div>
        </div>
    )
}

export default VerNota;