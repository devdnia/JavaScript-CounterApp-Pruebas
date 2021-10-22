import React from 'react';
import PropTypes from 'prop-types'
// import { Fragment } from 'react';


const PrimeraApp = ( { saludo, subtitulo } ) =>{

    return (
        <>
            <h1> { saludo }!!! </h1>
            {/*<pre> { JSON.stringify( saludo ) } </pre>*/}
            <p>{ subtitulo }</p>
        </>
    );



}

PrimeraApp.protoTypes = {
    saludo: PropTypes.string.isRequired,   
};


PrimeraApp.defaultProps = {
    subtitulo : 'Soy un subtítulo',
}

export default PrimeraApp;