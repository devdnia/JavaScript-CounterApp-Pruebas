import '@testing-library/jest-dom';
import { getHeroeByIdAsync } from '../../base/09-promesas';
import heroes from '../../datos/heroes';

describe('Pruebas con promesas', () => {
    
    test('getHeroeByIdAsync debe de retornar un Héroe async', ( done ) => {
        
        const id = 1;
        getHeroeByIdAsync( id )
            .then( hereo =>{

                expect( hereo ).toBe( heroes[0] );
                done();

            });
    });

    test('Debe de obtener un error si el héroe por id no exite ', ( done ) => {
        
        const id = 10;
        getHeroeByIdAsync( id )
            .catch( error =>{

                expect( error ).toBe( 'No se pudo encontrar el héroe' );
                done();
            });
    });
    
    
})
