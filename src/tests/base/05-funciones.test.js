import '@testing-library/jest-dom';
import { getUser, getUsuarioActivo } from '../../base/05-funciones';

describe('Pruebas en 05-funciones', () => {
    
    test('getUser debe de retornar un objeto', () => {
        
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        expect( user ).toEqual ( userTest );
    })

    // getUsuarioActivo debe de retornar un objeto
    test('getUsuarioActivo debre retonar un objeto', () => {

        const nombre = 'Juan';
        const user = getUsuarioActivo( nombre );
        const userTest ={
            uid: 'ABC567',
            username: nombre
        }
        
        expect( user ).toEqual( userTest );
        
    })
    
    
})
