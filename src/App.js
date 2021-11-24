import {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import Formulario from './components/Formulario';
import imagen from './img/cryptomonedas.png'
import axios from 'axios'

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media(min-width:992px){
    display:grid;
    grid-template-columns: repeat(2,1fr);
    column-gap: 2rem;
  }
`;

const Imagen = styled.img`
  max-width: 100%;
  marging-top: 5rem;
`;

const Heading = styled.h1`

  font-family: 'Bebas Neue', cursive;
  color: #FFF;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  marging-top: 80px;
  marging-bottom: 50px;

  &::after {
    content:'' 
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
  };

`;

function App() {

  const [moneda, setMoneda] = useState("");
  const [criptomoneda, setCriptomoneda] = useState("");

  useEffect(()=>{

    const cotizar= async ()=>{
      
      // evitar que se ejecute la petición cuando es la primera vez o no hay nada en el state
      if(moneda === "" || criptomoneda === "")return;
  
      // realizar la petición a la api de cotización
        
      const URL = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`
        
        let resultado = await axios.get(URL)

      console.log(resultado.data.DISPLAY[criptomoneda][moneda])
    }

    cotizar();

  },[moneda, criptomoneda])


  return (
    <Contenedor>
      <div>
        
        <Imagen
          src={imagen}
          alt="imagen decorativa"
        />
      </div>

        <div>
          <Heading>
            Cotizador de Cryptomonedas
          </Heading>

          <Formulario

            setCriptomoneda={setCriptomoneda}
            setMoneda={setMoneda}

          />
        </div>
      
    </Contenedor>
  );
}

export default App;
