import { useEffect, useState } from "react";

const useSmallDevice = () =>{
    const [onSmallDevice, setOnSmallDevice] = useState(false);
    const checkScreenSize = () =>{
        setOnSmallDevice(window.innerWidth < 768)
    }
    useEffect(()=>{
        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);
        return () => window.removeEventListener("resize", checkScreenSize)
    }, [])
    return {onSmallDevice}
}

export default useSmallDevice