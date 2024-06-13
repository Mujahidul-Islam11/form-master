/* eslint-disable react/prop-types */

import { useContext } from "react";
import { AssetContext } from "./Grandpa";


const Special = ({style, asset}) => {
    const gift = useContext(AssetContext)
    return (
        <div style={style}>
            <h3>Special</h3>
            <p>Has: {asset}</p>
            <p>Gift: {gift}</p>
        </div>
    );
};

export default Special;