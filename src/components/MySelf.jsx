/* eslint-disable react/prop-types */

import Special from "./Special";


const MySelf = ({style, asset}) => {
    return (
        <div style={style}>
            <h3>Me</h3>
            <Special style={style} asset={asset}></Special>
        </div>
    );
};

export default MySelf;