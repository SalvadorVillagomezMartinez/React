
import PropTypes from 'prop-types';

export const CounterApp = ( { value} ) => {
    

    return (    
        <>
           <h1>CounterApp</h1>
           <h2>{value}</h2>
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