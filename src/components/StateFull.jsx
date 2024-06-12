import { useState } from "react";


const StateFull = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();

    const handleSubmit = e =>{
        e.preventDefault();
        console.log(name, email)
    }
    const handleOnChangeName = e =>{
        setName(e.target.value);
        console.log(e.target.value)
    }
    const handleOnChangeEmail = e =>{
        setEmail(e.target.value);
        console.log(e.target.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleOnChangeName} type="text" name="name"/>
                <br />
                <input onChange={handleOnChangeEmail} type="email" name="email"/>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default StateFull;