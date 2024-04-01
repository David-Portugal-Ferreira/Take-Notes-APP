import React from 'react';
import { Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Header from './components/Header';
import Notes from './components/Notes';
import AdNota from './components/AdNota';
import VerNota from './components/VerNota';
import Footer from './components/Footer';

function App() {

  // Definindo o estado para armazenar as notas do utilizador
  let [notasDoUtilizador, setNotasDoUtilizador] = useState([])
  if(notasDoUtilizador.length > 0) {
    localStorage.setItem("to_dos", JSON.stringify(notasDoUtilizador))
  } 
  
  notasDoUtilizador = JSON.parse(localStorage.getItem("to_dos"))
  console.log(notasDoUtilizador)

  return (
    <div>
      <div>
      <Header />
      <Routes>
          <Route path="/" element={<Notes notas={notasDoUtilizador} setNotasDoUtilizador={setNotasDoUtilizador}/>} />
          {/* 
            É passada uma função como props. Essa função recebe a variavel 'nota' do próprio componente 'AdNota'
            Atravez do 'setNotasDoUtilizador([...notasDoUtilizador, nota])', o array é copiado e adiciona-se a nova nota
          */}
          <Route path="/adNota" element={<AdNota onSaveNota={(nota) => setNotasDoUtilizador([...notasDoUtilizador, nota])} />} />
          <Route path='/verNota/:index' element={<VerNota nota={notasDoUtilizador} />}></Route>
        </Routes>
      <Footer />
    </div>
    </div>
  );
}

export default App;
