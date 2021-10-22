import '@testing-library/jest-dom';
import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../../datos/heroes';


describe('Pruebas en funciones de Héroes, 08-imp-exp.js', () => {
    
    test('Debe de retornar un héroe por id ', () => {
        
        const id = 1;
        const heroe = getHeroeById( id );
        const heroeData = heroes.find( h => h.id === id );

        expect( heroe ).toEqual( heroeData );
    });

    test('Debe de retornar un undefined si Héroe no exite', () => {
        
        const id = 10;
        const heroe = getHeroeById( id );

        expect( heroe ).toBe( undefined );
    })

    /**
     * Debe de retornar un arreglo con los héroes de DC
     * owner
     * toEqual al arreglo filtrado
     */

    test('Debe de retornar un arreglo con los héroes de DC', () => {
        
        const owner      = 'DC';
        const owners     = getHeroesByOwner( owner );
        const ownersData = owners.filter( o=> o.owner === owner );

        expect( owners ).toEqual( ownersData );
    })
    
    /**
     * Debe retornar un arreglo con los héroes de Marvel
     * length = 2
     */

    test('Debe retornar un arreglo con los héroes de Marvel ', () => {
        
        const owner      = 'Marvel';
        const owners     =  getHeroesByOwner(owner);

        expect( owners.length ).toBe(2);



    })
    
})
