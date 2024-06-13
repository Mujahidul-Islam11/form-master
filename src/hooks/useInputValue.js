import { useState } from "react"

const useInputValue = (d=null) =>{
    const [value, setValue] = useState(d)
    const onChange = e =>{
        setValue(e.target.value);
    }
    // return [value, handleChange]
    return {
        value, 
        onChange
    }
}

export default useInputValue