
const Cotizacion = ({result}) => {
    if( Object.keys(result).length === 0 ) return null;
    
    console.log(result)

    return ( 
        <div>
            <p>EL precio es: <span>{result.PRICE}</span></p>
            <p>Precio más alto del dia: <span>{result.HIGHDAY}</span></p>
            <p>Precio más bajo del dia: <span>{result.LOWDAY}</span></p>
            <p>Variación ultimas 24hs: <span>{result.CHANGEPCT24HOUR}</span></p>
            <p>Última actualización: <span>{result.LASTUPDATE}</span></p>
        </div>
    );
}
 
export default Cotizacion;