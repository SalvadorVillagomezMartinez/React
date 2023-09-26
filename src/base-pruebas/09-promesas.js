import { getPilotById } from './08-imp-exp.js'

export const getPilotByIdAsync = ( id ) => {

    return new Promise( (resolve, reject) => {

        setTimeout( () =>  {
            const p1 = getPilotById( id );
            if ( p1 ) {
                resolve( p1 );
            } else {
                reject( 'No se pudo encontrar el Piloto ' + id );
            }
        }, 1000 )
    
    });


}
