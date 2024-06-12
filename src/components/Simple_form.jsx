

const Simple_form = () => {
    const handleSubmit = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value
        console.log(name)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name"/>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Simple_form;