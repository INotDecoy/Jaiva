import {pedirCarta, valorCarta, crearCartaHtml} from './'

/**
 * 
 * @param {Number} puntosMinimos que la computadora necesita para ganar
 * @param {HTMLElement} puntosHTML
 * @param {HTMLElement} divCartasComputadora
 * @result {Array<String>} Indefinido
 */
export const turnoComputadora = ( puntosMinimos,divCartasComputadora,puntosHTML,deck=[] ) => {

    if (!puntosMinimos) throw new Error('Puntos Minimos son necesarios')
    if (!puntosHTML) throw new Error('Arg puntosHTML son necesarios')

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta( deck);
 
        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML[1].innerText = puntosComputadora;
        
        // <img class="carta" src="assets/cartas/2C.png">
        const imgCarta = crearCartaHtml(carta)
        divCartasComputadora.append( imgCarta );
 
        if( puntosMinimos > 21 ) {
            break;
        }
 
    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );
 
    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
 }