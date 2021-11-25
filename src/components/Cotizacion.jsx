import styled from '@emotion/styled';

const Result = styled.div`
    color: #FFF;
`;


const Info = styled.p`
    font-size: 18px
    font-family:Arial, Helvetica, sans-serif;
    span{
        font-weight: bold;
    }
`;

const Precio = styled.p`

    font-size: 30px;
    font-family:Arial, Helvetica, sans-serif;
    span{
        font-weight: bold;
    }

`;

const Cotizacion = ({result}) => {
    if( Object.keys(result).length === 0 ) return null;
    
    console.log(result)

    return ( 
        <Result>
            <Precio>EL precio es: <span>{result.PRICE}</span></Precio>
            <Info>Precio más alto del dia: <span>{result.HIGHDAY}</span></Info>
            <Info>Precio más bajo del dia: <span>{result.LOWDAY}</span></Info>
            <Info>Variación ultimas 24hs: <span>{result.CHANGEPCT24HOUR}</span></Info>
            <Info>Última actualización: <span>{result.LASTUPDATE}</span></Info>
        </Result>
    );
}
 
export default Cotizacion;