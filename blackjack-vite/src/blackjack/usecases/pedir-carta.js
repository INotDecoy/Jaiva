/**
 * 
 * @param {Array<String>} Es un arreglo de string de las cartas
 * @returns {<String>} Retorna la carta del deck
 */
export const pedirCarta = (deck) => {

    if (!deck || deck.length === 0) {
        throw new Error ('No hay cartas en el deck');
    }
    const carta = deck.pop();
    return carta;
 }

 export default pedirCarta;