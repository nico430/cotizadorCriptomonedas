import {useEffect, useState} from 'react'
import axios from 'axios'
import styled from '@emotion/styled';
import useMoneda from '../hooks/useMoneda';
import useCrypto from '../hooks/useCryptomoneda';

const Boton = styled.input`

    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66a2fe;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: #FFF;
    transition: background-color .3s ease;

    &:hover {
        background-color: #326AC0;
        cursor: pointer;
    }


`

const Formulario = () => {

    const [listaCrypto, setCriptomonedas] = useState([]);
    const [Error, setError] = useState(false)

    const MONEDAS = [
        { codigo: 'USD', nombre: 'Dolar de Estados Unidos' },
        { codigo: 'MXN', nombre: 'Peso Mexicano' },
        { codigo: 'ARS', nombre: 'Peso Argentino' },
        { codigo: 'EUR', nombre: 'Euro' },
        { codigo: 'GBP', nombre: 'Libra Esterlina' }
    ];

    //utilizar useMoneda
    const[moneda, SelectMonedas] = useMoneda('Elige tu moneda', '', MONEDAS)

    const [cryptoMoneda, SelectCrypto] = useCrypto("Elige tu Criptomoneda", "", listaCrypto)

    useEffect(()=>{
        const consultarApi = async ()=>{
            const URL = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD"
            let resultado = await axios.get(URL)
            setCriptomonedas(resultado.data.Data)
        }

        consultarApi()
    },[])

    //onsubmit
    const cotizarMoneda = (e)=>{
        e.preventDefault();

        //validar que el formulario tenga contenido

        if( moneda === "" || cryptoMoneda===""){
            setError(true);
            return;
        }

        //pasar datos al componente principal
        setError(false);


    }

    return (  

        <form
            onSubmit={cotizarMoneda}
        >

            {Error?"Hay un error" : null}

            <SelectMonedas/>
            <SelectCrypto/>


            <Boton
            type="submit"
            value="calcular"
            />

        </form>
        
    );
}
 
export default Formulario;