import PropTypes from 'react';

// Tanto las props como el estado son lo unico que provoca un re-render en un componente de React
// De hecho son la base de React
const Counter = ({ number, totalClicks }) => {
    return <span>
        El contador es {number} y el total de click es {totalClicks}
    </span>
};

// Para definir el tipo de props que va a recibir el componente
Counter.propTypes = {
    number: PropTypes.number.isRequired,
    totalClicks: PropTypes.number.isRequired
};

export { Counter };