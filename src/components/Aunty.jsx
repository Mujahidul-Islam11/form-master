/* eslint-disable react/prop-types */

import Cousin from "./Cousin";


const Aunty = ({style}) => {
    return (
        <div style={style}>
           <h3>Aunty</h3> 
           <div style={{display: "flex", gap: "8px"}}>
            <Cousin style={style} name={"Masud"}></Cousin>
            <Cousin style={style} name={"Sani"}></Cousin>
           </div>
        </div>
    );
};

export default Aunty;