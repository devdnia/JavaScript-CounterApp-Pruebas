import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

import PrimeraApp from "../PrimeraApp";


describe('Pruebas en <PrimeraApp />', () => {
    
    /*
    test('debe de mostrar el mensaje de "Hola soy Iván" ', () => {
        const saludo = 'Hola soy Iván';
        /**
         * const wrapper = render(<PrimeraApp saludo={ saludo } />);
         * expect( wrapper.getByText( saludo ) ).toBeInTheDocument(); 
         */       
        // const { getByText } = render(<PrimeraApp saludo={ saludo } />);
        // expect( getByText( saludo ) ).toBeInTheDocument(); 
    // });
    
    test('debe de mostrar <PrimeraApp /> correctamente ', () => {
        
        const saludo = 'Hola, soy Iván';
        const wrapper = shallow( <PrimeraApp saludo={ saludo } /> );

        expect( wrapper ).toMatchSnapshot();

    });

    test('debe de mostrar el subtitulo enviado por props', () => {
        
        const saludo    = 'Hola, soy Iván';
        const subTitulo = 'Soy un subtítulo';
        const wrapper   = shallow( 
            <PrimeraApp 
                saludo={ saludo } 
                subtitulo={subTitulo }
                /> );

        const textoParrafo = wrapper.find('p').text();
         
        expect( textoParrafo ).toBe( subTitulo );


    });
    



    
});
