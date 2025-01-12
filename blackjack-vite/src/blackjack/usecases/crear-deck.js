import _ from 'underscore';

/**
 * 
 * @param {Array<String>} tipoDeCarta Ejemplo ['C','D','H','S']
 * @param {Array<String>} tipoEspeciales Ejemplo ['A','J','Q','K']
 * @returns {Array<String>} retorna nuestro arreglo de cartas
 */


export const crearDeck = (tipoDeCarta, tipoEspeciales) => {
    if  (!tipoDeCarta || tipoDeCarta.lentgh === 0)
        throw new Error('tipoDeCarta son Obligatorios con un arreglo de string')

    if  (!tipoEspeciales || tipoEspeciales.lentgh === 0)
        throw new Error('tipoEspeciales son Obligatorios con un arreglo de string')
    
    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tipoDeCarta ) {
            deck.push( i + tipo);
        }
    }
 
    for( let tipo of tipoDeCarta ) {
        for( let esp of tipoEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    console.log( deck );
    return deck;
 }
 

 export default crearDeck;