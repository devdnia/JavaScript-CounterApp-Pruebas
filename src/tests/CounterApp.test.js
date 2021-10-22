import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import  CounterApp from '../CounterApp';

/**
 * 02-tarea.md
 */
describe('Pruebas de componente <CounterApp />', () => {

    let wrapper = shallow( <CounterApp /> );

    beforeEach( () =>{

        wrapper = shallow( <CounterApp /> );

    });

    test('debe de mostrar <CounterApp /> correctamente (hacer match con un spnapshot) ', () => {

        expect( wrapper ).toMatchSnapshot();

    });

    test('debe de mostrar el valor por defecto de 100 ', () => {
        
        const valor     = '100';
        const wrapper   = shallow( 
            <CounterApp 
                value={valor} 
                /> );

        const counterText = wrapper.find('h2').text().trim(); // trim() para borrar los espacios
         
        expect( counterText ).toBe( valor );
    });

    test('debe de incrementar con el botón +1', () => {
       
        wrapper.find( 'button' ).at(0).simulate( 'click' );
        const counterText = wrapper.find('h2').text().trim();
        expect( counterText ).toBe( '11' );

        
    });
    
    test('debe decrementar con el botón -1', () => {
       
        wrapper.find( 'button' ).at(2).simulate( 'click' );
        const counterText = wrapper.find('h2').text().trim();
        expect( counterText ).toBe( '9' );

        
    });

    test('debe colocar el valor por defecto con el btn resert', () => {
       
        const wrapper   = shallow( <CounterApp value={ 105 } /> );
        wrapper.find( 'button' ).at(0).simulate( 'click' );
        wrapper.find( 'button' ).at(0).simulate( 'click' );
        wrapper.find( 'button' ).at(1).simulate( 'click' );
        const counterText = wrapper.find('h2').text().trim();

        expect( counterText ).toBe( '105' );




        
    });
    
});
