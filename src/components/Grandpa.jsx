import Aunty from "./Aunty";
import Dad from "./Dad";
import Uncle from "./Uncle";


const Grandpa = () => {
    return (
        <div style={{border: "2px solid yellow", borderRadius: "8px", padding: "26px", display:"flex", gap: "20px", justifyContent: "center"}}>
            <Dad asset={"Diamond"} style={{border: "2px solid yellow", borderRadius: "8px", padding: "12px"}}></Dad>
            <Uncle style={{border: "2px solid yellow", borderRadius: "8px", padding: "12px"}}></Uncle>
            <Aunty style={{border: "2px solid yellow", borderRadius: "8px", padding: "12px"}}></Aunty>
        </div>
    );
};

export default Grandpa;