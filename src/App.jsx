import "./App.css";
import HookForm from "./components/HookForm";
import RefForm from "./components/RefForm";
import ReusableForm from "./components/ReusableForm";
import Simple_form from "./components/Simple_form";
import StateFull from "./components/StateFull";

function App() {
  const handleSingUp = (e) => {
    e.preventDefault();
    console.log(e.target.name.value, e.target.email.value, e.target.pass.value)
  };
  const handleUpdateProfile = (e) => {
    e.preventDefault();
    console.log(e.target.name.value, e.target.email.value, e.target.pass.value)
  };

  return (
    <>
      <h1>Vite + React</h1>
      {/* <Simple_form></Simple_form> */}
      {/* <StateFull></StateFull> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      <ReusableForm
        title={"Sign Up"}
        handleSubmit={handleSingUp}
        submitText="Submit"
      ></ReusableForm>
      <ReusableForm
        title={"Update Profile"}
        handleSubmit={handleUpdateProfile}
        submitText="Update"
      ></ReusableForm>
    </>
  );
}

export default App;
