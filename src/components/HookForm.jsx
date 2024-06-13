import useInputValue from "../hooks/useInputValue";


const HookForm = () => {
    const state = useInputValue("email@gmail.com");

    const handleSubmit = e =>{
        e.preventDefault();
        console.log(state.value)
    }
    return (
        <div>
          <form onSubmit={handleSubmit}>
                <input type="text" name="name"/>
                <br />
                <input {...state} type="email" name="email"/>
                <br />
                <input type="password" name="pass"/>
                <br />
                <input type="submit" value="Submit" />
            </form>  
        </div>
    );
};

export default HookForm;