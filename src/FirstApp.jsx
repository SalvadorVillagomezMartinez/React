
import PropTypes from 'prop-types';

export const FirstApp = ( { name,message,title, team} ) => {
    

    return (    
        <>
            <h1>{name}</h1> 
            <p>{message}</p> 
            <p>{title + ' champion of the world'}</p> 
            <p>{'Team: ' + team}</p> 
        </>
    );
}
/*
    PropsType
    (name) Obligatorio y string
    (message) Obligatorio y string
    (title) Obligatorio y number
*/
FirstApp.propTypes ={
    name : PropTypes.string.isRequired,
    message : PropTypes.string.isRequired,
    title : PropTypes.number.isRequired,
    team : PropTypes.string.isRequired,
}
/*
Valores default (Son evaluadas primero que las propsType)
*/
FirstApp.defaultProps ={
    team : 'RedBull Racing'
}