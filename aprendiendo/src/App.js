import React, {useEffect, useState} from 'react';
import './assets/css/bootstrap.css';

//Importar componentes
//import Componente from './components/Componente';
import SignIn from './components/SignIn';

const GIFS = ['https://media3.giphy.com/media/TObbUke0z8Mo/giphy.gif?cid=ecf05e47cbdu6uh6pgno1owdf3iaj1gd34gzimdkqkqnb09c&rid=giphy.gif',
'https://media0.giphy.com/media/cnbsOTkEJnq0/giphy.gif?cid=ecf05e47633e12ac06dbd1335eb2a87ab224676e179ff424&rid=giphy.gif'];

const DIFERENT_GIFS = ['https://media3.giphy.com/media/EPcvhM28ER9XW/giphy.gif?cid=ecf05e4750329d51d8bc56129d9dc6d0db506a05e44d4081&rid=giphy.gif'];

function App() {
  const [gifts, setGifs] = useState(GIFS);

  useEffect(function() {
     
  }, [])

    return (
      <div className="app container">
        <div className="jumbotron">
          <p className="lead text-center">Buscador de Imágenes</p>
        </div>

        <section className="app-content">
          {
            gifts.map(singleGif => <img src={singleGif} />)
          }
          <br />
          <button onClick={() => setGifs(DIFERENT_GIFS)}>Cambiar gifts</button>
        </section>
        <SignIn></SignIn>
      </div>
    );
}

export default App;