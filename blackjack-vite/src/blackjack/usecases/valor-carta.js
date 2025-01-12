
/**
 * 
 * @param {<String>} El valor de la carta
 * @returns {<Number>}El valor de la carta tanto si es un Ace J Q K
 */
export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
 }

 export default valorCarta;