/* eslint-disable react/prop-types */


const Special = ({style, asset}) => {
    return (
        <div style={style}>
            <h3>Special</h3>
            <p>Has: {asset}</p>
        </div>
    );
};

export default Special;