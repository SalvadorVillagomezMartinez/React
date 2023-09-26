
import PropTypes from 'prop-types';
import { useState } from 'react';

export const CounterApp = ( { value} ) => {
    
    // function handleAdd(){
    //     console.log('+1')
    // }
    const [counter ,setCounter] = useState(value); // Asignamos el valor de props a counter

    const handleAdd = () => {
        setCounter(counter+1)
    }
    const handleDesc = () => {
        setCounter(counter-1)
    }
    const handleReset = () => {
        setCounter(value)
    }
    return (    
        <>
           <h1>CounterApp</h1>
           <h2>{counter}</h2>
           <button onClick={handleAdd}>+1</button>
           <button onClick={handleDesc}>-1</button>
           <button onClick={handleReset}>reset</button>
        </>
    );
}
/*
    PropsType
    (value) Obligatorio y number

*/
CounterApp.propTypes ={

    value:PropTypes.number.isRequired
   
}
/*
Valores default (Son evaluadas primero que las propsType)
*/
CounterApp.defaultProps ={
 
}