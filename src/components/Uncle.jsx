/* eslint-disable react/prop-types */

import Cousin from "./Cousin";

const Uncle = ({style}) => {
    return (
        <div style={style}>
            <h3>Uncle</h3>
            <div style={{display: "flex", gap: "8px"}}>
                <Cousin style={style} name={"Rafsan"}></Cousin>
                <Cousin style={style} name={"Jisan"}></Cousin>
            </div>
        </div>
    );
};

export default Uncle;