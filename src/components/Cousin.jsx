/* eslint-disable react/prop-types */


const Cousin = ({style, name}) => {
    return (
        <div style={style}>
            <h2>Cousin</h2>
                <p>{name}</p>
        </div>
    );
};

export default Cousin;