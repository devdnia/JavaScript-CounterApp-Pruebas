import '@testing-library/jest-dom';
import { retornaArreglo } from '../../base/07-deses-arr';



describe('Pruebas en desestructuración 07-deses-arr.js', () => {
    
    test('Debe de retornar un String y un number ', () => {
       
        /*
       const arr = retornaArreglo();
       expect( arr ).toEqual( ['ABC', 123] );
        */

       // Desestructruración
       const [ letras, numero ] = retornaArreglo();
       
       expect( letras ).toBe( 'ABC');
       expect( typeof letras ).toBe( 'string');

       expect( numero ).toBe( 123);
       expect( typeof numero ).toBe( 'number');

    })
    
})
