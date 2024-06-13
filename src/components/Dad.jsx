/* eslint-disable react/prop-types */
import MyBrother from "./MyBrother";
import MySelf from "./MySelf";


const Dad = ({style, asset}) => {
    return (
        <div style={style}>
            <h3>Dad</h3>
            <div style={{ display: "flex", gap:"8px"}}>
            <MySelf style={style} asset={asset}></MySelf>
            <MyBrother style={style}></MyBrother>
            </div>
        </div>
    );
};

export default Dad;