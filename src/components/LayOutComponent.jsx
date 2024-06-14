import { useEffect, useState } from "react";


const LayOutComponent = () => {
    const [onSmallDevice, setOnSmallDevice] = useState(false);
    const checkScreenSize = () =>{
        setOnSmallDevice(window.innerWidth < 768)
    }
    useEffect(()=>{
        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);
        return () => window.removeEventListener("resize", checkScreenSize)
    }, [])
    console.log(onSmallDevice);
    return (
        <div>
            <h3>On {onSmallDevice ? "Small": "Large"} device</h3>
        </div>
    );
};

export default LayOutComponent;