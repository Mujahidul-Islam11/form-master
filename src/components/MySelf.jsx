/* eslint-disable react/prop-types */

import Special from "./Special";


const MySelf = ({style}) => {
    return (
        <div style={style}>
            <h3>Me</h3>
            <Special style={style}></Special>
        </div>
    );
};

export default MySelf;