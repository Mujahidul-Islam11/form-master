

const ReusableForm = ({title, handleSubmit, submitText="Submit"}) => {
    return (
        <div>
            <h1>{title}</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name"/>
                <br />
                <input type="email" name="email"/>
                <br />
                <input type="password" name="pass"/>
                <br />
                <input type="submit" value={submitText} />
            </form>  
        </div>
    );
};

export default ReusableForm;