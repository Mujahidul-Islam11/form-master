# Handle form with onSubmit
- step-1. Create a form tag and create the necessary input tags & submit button
- step-2. Give a name attribute inside the input tags as attribute, for example:- <input type="email" name="email" />, <input type="password" name="pass" />
- step-3. Create an event handler, const handleSubmit = e =>{
        console.log("form submitted")
    }
- step-4. Call the function inside the form tag using onSubmit hook, <form onSubmit={()=>handleSubmit()}></form>
- step-5. stop the default behavior, when we submit the form it will reload the whole page. So, we need to prevent it by using event.preventDefault(). Event parameter holds the whole information of form. So, we can access anything from the form by event parameter.

## Access field data
- step-6. const handleSubmit = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value // remember the name should have to be same as the input name value.
        console.log(name)
    }

